import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import YOUTUBE_API_LINK from '../constants/youTubeVideoApiLink'
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';


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
  
  return videos.length === 0 ? (<Shimmer />)  :  (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return <Link to={"/watch?v=" + video.id}><VideoCard info={video} key={video.id}/> </Link>;
      })}
      
    </div>
    
  )
}

export default VideoContainer