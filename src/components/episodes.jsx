import React from "react";

const Episodes = ({ id, summary, image, name, handleClick }) => {
  return (
    <>
      <div
        onClick={event => {
          handleClick(event.target);
        }}
        className="bg-white grid-cols-1 shadow-lg rounded-lg overflow-hidden m-auto cursor-pointer w-9/12 h-l relative"
      >
        <img
          alt={
            `${summary}` === null ? `no description available` : `${summary}`
          }
          id={id}
          className="object-cover h-l w-auto absolute  z-0"
          src={
            image
              ? `${image.original}`
              : `https://www.iceagetrail.org/wp-content/uploads/2016/11/currently-unavailable.png`
          }
        />
        <div className="flex h-full justify-center items-end">
          <div className="absolute z-50 font-bold text-base md:text-2xl font-grand text-white">
            {image ? name : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Episodes;
