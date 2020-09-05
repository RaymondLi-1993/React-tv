import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-gray-500 flex p-2 justify-between items-center">
        <Link to="/">
          <div className=" cursor-pointer flex items-center justify-center h-48 m-0">
            <div className="h-48 w-3/12 ">
              <img
                src="https://cdn4.iconfinder.com/data/icons/iconize-apple-devices-freebies/128/apple-03-256.png"
                alt="Apple-tv-icon"
                className=" object-cover w-full h-40 rounded-md "
              ></img>
            </div>
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
