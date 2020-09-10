import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" bg-lighterBlack flex m-0 justify-between items-center">
        <Link to="/">
          <div className=" cursor-pointer flex items-center justify-center h-32 m-0">
            <div className=" h-32 w-3/12 ">
              <img
                src="https://cdn4.iconfinder.com/data/icons/iconize-apple-devices-freebies/128/apple-03-256.png"
                alt="Apple-tv-icon"
                className=" object-cover w-full h-32 rounded-md animate-pulse"
              ></img>
            </div>
            <span className="p-4 font-grand text-4xl text-white">
              React <strong className="text-white">TV</strong>
            </span>
          </div>
        </Link>
        <div>
          <img
            className="w-20 mr-24"
            src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png"
            alt="react-logo"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Header;
