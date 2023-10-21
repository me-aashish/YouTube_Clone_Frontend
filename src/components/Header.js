import React from "react";
import HamBurgerIconLink from "../constants/hamburgerIconLink";
import YouTubeIconLink from "../constants/youTubeIconLink";
import NotificationIconLink from "../constants/notificationIconLink";
import UserIconLink from "../constants/userIconLink";

const Header = () => {
  return (
    <div className="grid grid-flow-col border-2 shadow-lg">
      <div className="flex grid-cols-2">
        {/* hamburger btn */}
        <img
          src={HamBurgerIconLink}
          alt="hamburger-icon"
          className="flex p-2 w-14"
        />
        {/* // you tube logo */}
        <img
          src={YouTubeIconLink}
          alt="youtube-icon"
          className="flex p-2 w-28"
        />
      </div>
      <div className="flex grid-cols-8 p-3">
        <input
          type="text"
          placeholder="Search"
          className=" rounded-l-full p-2 border-2 w-[550px] ml-40"
        />
        <button className="rounded-r-full p-2 bg-gray-200 w-16">🔍</button>
      </div>
      <div className="flex grid-cols-2 ml-28">
        <img
          src={NotificationIconLink}
          alt="notification-icon"
          className="w-16"
        />
        <img src={UserIconLink} alt="user-icon" className="w-16 p-3" />
      </div>
    </div>
  );
};

export default Header;
