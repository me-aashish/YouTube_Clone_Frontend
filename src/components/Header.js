import React from "react";
import HamBurgerIconLink from "../constants/hamburgerIconLink";
import YouTubeIconLink from "../constants/youTubeIconLink";
import NotificationIconLink from "../constants/notificationIconLink";
import UserIconLink from "../constants/userIconLink";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const hamburgerOnClickHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col border-2 shadow-lg h-16">
      <div className="flex grid-cols-2">
        {/* hamburger btn */}
        <img
          src={HamBurgerIconLink}
          alt="hamburger-icon"
          className="flex p-2 w-14 h-[59px] cursor-pointer"
          onClick={() => hamburgerOnClickHandler()}
        />
        {/* // you tube logo */}
        <a href="/"><img
          src={YouTubeIconLink}
          alt="youtube-icon"
          className="flex p-2 w-28 h-[53px]"
        />
        </a>
      </div>
      <div className="flex grid-cols-8 p-3 h-[59px]">
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
          className="w-16 h-[60px]"
        />
        <img src={UserIconLink} alt="user-icon" className="w-16 p-3 h-[61px]" />
      </div>
    </div>
  );
};

export default Header;
