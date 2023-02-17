const express = require("express")
const multer = require("multer")
const uuid = require("uuid").v4
const app = express()
const path = require("path")
const dotenv = require('dotenv').config({path: path.join(__dirname, "..", ".env")})
// const connectDB = require('./db')
const Video = require("./models/videoModel")
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const { s3Uploadv2 } = require("./s3Service")

const cors = require('cors');
app.use(cors())


console.log(process.env.MONGO_URI)
// connectDB()
const connectDB = async () => {
    // console.log(process.env.MONGO_URI)
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
connectDB()
const storage = multer.memoryStorage()
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads")
//     },
//     filename: (req, file, cb) => {
//         const {originalname} = file
//         cb(null, `${uuid()}-${originalname}`)
//     }
// })

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "video/mp4" || file.mimetype === "image/jpg" || file.mimetype === "image/png"){
        cb(null, true)
    } else {
        cb(new Error("file is not of the correct type"), false)
    }
}
const upload = multer({storage, fileFilter})

const multiUpload = upload.fields([{name: "video", maxCount: 1}, {name: "image", maxCount: 1}])


// title: {
//     type: String,
//     required: [true, "please add a title"]
// },
// videoid: {
//     type: String,
//     required: true,
//     unique: true
// },
// imageid: {
//     type: String,
//     required: true,
//     unique: true
// },
// course: {
//     type: String,
//     required: true
// }

app.post("/upload", multiUpload, asyncHandler(async (req, res) => {
    // console.log(req.files.video[0].filename)
    // console.log(req.body.title)
    // console.log(req.body.course)
    const vid = await s3Uploadv2(req.files.video[0])
    const img = await s3Uploadv2(req.files.image[0])
    if(!req.body.title){
        res.status(400)
        throw new Error('Please add a title field')
    }
    if(!req.body.course){
        res.status(400)
        throw new Error('Please add a course field')
    }
    console.log(vid.Key)
    console.log(img.Key)
    const newVideo = await Video.create({
        title: req.body.title,
        videoid: vid.Key,
        imageid: img.Key,
        course: req.body.course
    })
    res.status(201).json(newVideo)
}))

app.get("/videos/:course", asyncHandler(async (req, res) => {
    // console.log(req.params.course)
    const videos = await Video.find({ course: req.params.course })
    if(videos.length==0) {
        res.status(200).json([])
    }
    res.status(200).json(videos)
}))

app.listen(4000, () => console.log("listening on port 4000"))