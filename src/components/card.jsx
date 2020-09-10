import React from "react";
import History from "../history";

const Card = ({ Info, id }) => {
  let handleClick = event => {
    History.push(`/info/${event.target.id}`);
  };

  return (
    <>
      <div className="bg-white grid-cols-1 shadow-lg rounded-lg overflow-hidden m-auto cursor-pointer  hover:opacity-75 w-9/12 h-l relative">
        <img
          alt={`${Info.name}`}
          id={id}
          className="object-cover h-l w-full absolute  z-0"
          src={
            Info.image
              ? `${Info.image.medium}`
              : `https://www.iceagetrail.org/wp-content/uploads/2016/11/currently-unavailable.png`
          }
          onClick={handleClick}
        />
        <div className="flex h-full justify-center items-end">
          <h1 className="absolute z-50 text-white">{Info.name}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
