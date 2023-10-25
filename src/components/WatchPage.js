import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    const [getSearchParam] = useSearchParams();
  return (
    <div className="ml-10 mt-2">
      <iframe
        width="900"
        height="450"
        src={"https://www.youtube.com/embed/" + getSearchParam.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default WatchPage