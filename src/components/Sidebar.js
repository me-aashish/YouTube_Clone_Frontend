import React from 'react'

const Sidebar = () => {

  return (
    <div className="p-5 divide-y-2 h-[520px]">
      <div className="pb-3">
        <ul>
          <li>Home</li>
          <li>Videos</li>
          <li>Shorts</li>
          <li>Live</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="pb-3">
        <h1 className="font-bold pt-3">Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="pb-3">
        <h1 className="font-bold pt-3">Trending</h1>
      </div>
      <div className="pb-3">
        <h1 className="font-bold pt-3">Watch Later</h1>
      </div>
    </div>
  );
}

export default Sidebar;