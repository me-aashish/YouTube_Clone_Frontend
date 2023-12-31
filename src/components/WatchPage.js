import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    const [getSearchParam] = useSearchParams();
  return (
    <div className="flex flex-col ">
      <div className="flex ">
        <div className="ml-10 mt-2 ">
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + getSearchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
        <div className=""><LiveChat /></div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
}

export default WatchPage