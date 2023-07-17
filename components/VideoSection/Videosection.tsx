import React from 'react'
import VideoCarousel from './VideoCarousel'

const Videosection = () => {
    const slides = [
        {
          vidsrc: "videos/vid1.mp4",
        },
        {
          vidsrc: "videos/vid2.mp4",
        },
        
      ];
  return (
    <div>
    <div className="containerstyles">
    <VideoCarousel slides={slides}/>
    </div>
   </div>
  )
}
export default Videosection