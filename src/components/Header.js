import React, { useEffect, useState } from "react";
import HamBurgerIconLink from "../constants/hamburgerIconLink";
import YouTubeIconLink from "../constants/youTubeIconLink";
import NotificationIconLink from "../constants/notificationIconLink";
import UserIconLink from "../constants/userIconLink";
import { useDispatch} from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import YOUTUBE_SEARCH_API from "../constants/youTubSearchApiLink";


const Header = () => {
  const dispatch = useDispatch();
  const hamburgerOnClickHandler = () => {
    
    dispatch(toggleMenu());
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  useEffect(() => {

    /**
     * make an API call after every key press 
     * but if the difference between two API calls is < 200ms
     * decline the API call
     */

    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])

  /**
   * key- i
   *  - render the component 
   *  - useEffect ();
   *  - start timer, make an API call after 200ms
   * 
   * 
   * key- iphone
   * - destroy the component (useEffect return method is also called too)
   * - re-render the component
   * - useEffect();
   * - start timer -> make API call after 200ms again (new one)
   */

  const getSearchSuggestions = async() => {
    // console.log(searchQuery);
    const data = await fetch(
      YOUTUBE_SEARCH_API +
        searchQuery
    );
    const json = await data.json();
    setSearchSuggestions(json[1]);
    
  }

  return (
    <div className="grid grid-flow-col border-2 shadow-lg h-16 sticky top-0 bg-white">
      <div className="flex grid-cols-2">
        {/* hamburger btn */}
        <img
          src={HamBurgerIconLink}
          alt="hamburger-icon"
          className="flex p-2 w-14 h-[59px] cursor-pointer"
          onClick={() => hamburgerOnClickHandler()}
        />
        {/* // you tube logo */}
        <a href="/">
          <img
            src={YouTubeIconLink}
            alt="youtube-icon"
            className="flex p-2 w-28 h-[53px] cursor-pointer"
          />
        </a>
      </div>
      <div>
        <div className="flex grid-cols-8 p-3 h-[59px]">
          <input
            type="text"
            placeholder="Search"
            className=" rounded-l-full p-2 border-2 w-[550px] ml-40"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button className="rounded-r-full p-2 bg-gray-200 w-16">🔍</button>
        </div>
        
          <div className="sticky ml-44 bg-white w-[34rem] px-2 shadow-lg rounded-lg border">
            <ul>
              {searchSuggestions.map((suggestion) => 
                
                (<li
                  className="py-2 px-3 font-bold hover:bg-gray-100 rounded-lg"
                  key={suggestion}
                >
                  🔍 {suggestion}
                </li>)
              )}
              {/* <li className="py-2 px-3 font-bold hover:bg-gray-100 rounded-lg" >{searchQuery}</li> */}
            </ul>
          </div>
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
