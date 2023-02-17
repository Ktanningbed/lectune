import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import VideoCard from '../VideoCard'

function Library() {
    const categories = ["MATH135", "MATH136", "MATH137", "MATH138", "CS135", "CS136"]

    const [select, setSelect] = useState('');
    const [videos, setVideos] = useState([])
    const [video, setVideo] = useState('')
    const onSelect = async (course) => {
        setSelect(course)
        const response = await axios.get(`http://localhost:4000/videos/MATH136`)
        setVideos([])
        // console.log(response.data.length)
        for(var i = 0; i<response.data.length; i++) {
            console.log(response.data[i])
            var item = response.data[i]
            const insertAt = 1
            const nextVids = [
                ...videos.slice(0, insertAt),
                [item.title, item.videoid, item.imageid],
                ...videos.slice(insertAt)

            ]
            setVideos(nextVids)
        }
    }


    return (
        <>
            <div className='library-container'>
                <div className="back">
                    <Link to="/"><a href='#start' className='start'>Back</a></Link>
                </div>
                <div className="categories">
                    <h3>Folders</h3><br/> 
                    {categories.map(course => {
                        return <button key={course} onClick={()=>{onSelect(course)}} className="courses">{course}</button>
                    })}
                </div>
            </div>
            <div className="video-content">
                {videos.map(vid => { console.log(process.env.React_App_CF+vid[2])
                    return (
                        <div className="vid">  {video &&
                            <video className="video" width="750" height="500" controls >
                                <source src={"https://"+process.env.React_App_CF+vid[1]} type="video/mp4" />
                            </video>}<br/>
                            <button key={vid[2]} onClick={() => {setVideo(vid[1])}}>
                                <img className="vid-img" src={"https://"+process.env.React_App_CF+vid[2]} alt='img' />
                                <p>{vid[0]}</p>
                            </button>
                        </div>
                        
                    )
                })}
            </div>
        </>
    )
}

export default Library