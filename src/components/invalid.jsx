import React from "react";

const Invalid = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <span>
        <img
          src="https://cdn4.iconfinder.com/data/icons/emoji-18/61/20-256.png"
          alt="surprised"
          className="h-64 w-64 animate-bounce"
        />
      </span>
      <div className="  ml-24 text-4xl font-bold">UNABLE TO FIND RESULTS!</div>
    </div>
  );
};

export default Invalid;
