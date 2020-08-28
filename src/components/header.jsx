import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-gray-500 py-12 flex justify-between">
        <Link to="/">
          <div className=" cursor-pointer flex items-center">
            <img
              src="https://cdn0.iconfinder.com/data/icons/iphone-7-airpods-icons/24/apple-tv-box-256.png"
              alt="Apple-tv-icon"
              className="w-20 ml-24"
            ></img>
            <span className="p-4 font-mono text-4xl">
              React <strong>TV</strong>
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
