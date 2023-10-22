import React from "react";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  
  return (
    <div className="grid grid-flow-col ">
      {isMenuOpen ? (
        <div className="flex grid-cols-2 border-2 shadow-lg w-44 ">
          <Sidebar />
        </div>
      ):null}
      <div className="flex grid-cols-10">
        <VideoContainer />
      </div>
    </div>
  );
};

export default Body;
