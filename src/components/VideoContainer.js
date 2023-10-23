import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import YOUTUBE_API_LINK from '../constants/youTubeVideoApiLink'
import VideoCard from './VideoCard';


const VideoContainer = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_API_LINK);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }

  return (
    <div className={isMenuOpen ? "flex flex-wrap" : "flex"}>
      {videos.map((video) => {
        return <VideoCard info={video} key={video.id}/>;
      })}
      
    </div>
    
  )
}

export default VideoContainer