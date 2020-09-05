import React from "react";
import History from "../history";

const Card = ({ episodeInfo }) => {
  let handleClick = event => {
    History.push(`/info/${event.target.id}`);
  };

  return (
    <>
      <div className="bg-white grid-cols-1 shadow-lg rounded-lg overflow-hidden m-auto cursor-pointer hover:opacity-75 w-9/12 h-l relative">
        <img
          alt={`${episodeInfo.name}`}
          id={episodeInfo.id}
          className="object-cover h-l w-auto absolute z-0"
          src={`${episodeInfo.image.original}`}
          onClick={handleClick}
        />
        <div className="flex h-full justify-center items-end">
          <h1 className="absolute z-50 text-white">{episodeInfo.name}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
