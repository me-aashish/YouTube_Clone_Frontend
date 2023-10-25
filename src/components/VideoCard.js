import React from 'react'

const VideoCard = ({ info }) => {
    console.log(info);
    // const { snippet, statistics } = info;
    // const { channeltitle, thumbnails, title} = snippet;

  return (
    <div className="p-2 m-2 w-60 h-[346px] rounded-lg hover:bg-zinc-200">
      <img
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="video-thumbnail"
        className="h-36 w-56 rounded-xl"
      />
      <ul>
        <li className="font-bold">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VideoCard