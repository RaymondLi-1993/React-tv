import React from "react";
import History from "../history";

const Card = ({ episodeInfo }) => {
  let handleClick = event => {
    History.push(`/info/${event.target.id}`);
  };

  return (
    <>
      <div className="bg-white  grid-cols-1 shadow-lg rounded-lg overflow-hidden m-auto cursor-pointer hover:opacity-75 w-11/12 h-11/12">
        <img
          alt={`${episodeInfo.name}`}
          id={episodeInfo.id}
          className="object-cover h-64 w-auto"
          src={`${episodeInfo.image.original}`}
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default Card;
