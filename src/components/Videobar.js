import React from 'react'
import "./Videobar.css"

function Videobar() {
    return (
        <div className= "video-container">
           <video src='/video_sunset.mp4' autoPlay loop muted />
           <h1>Visit Bangladesh</h1> 
           <p>The land of beauty</p>
        </div>
    )
}

export default Videobar
