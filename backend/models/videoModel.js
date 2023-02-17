const mongoose = require('mongoose')

const videoSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, "please add a title"]
    },
    videoid: {
        type: String,
        required: true,
        unique: true
    },
    imageid: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Video', videoSchema)