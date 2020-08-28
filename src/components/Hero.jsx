import React from "react";
import { useState } from "react";

const Hero = ({ shows, handleSearch }) => {
  const [term, setTerm] = useState(``);

  let handleSubmit = event => {
    event.preventDefault();

    handleSearch(term);
    setTerm(``);
  };

  return (
    <>
      <div className="h-full">
        <div
          className="bg-fixed py-64 bg-no-repeat bg-cover z-0"
          style={{ backgroundImage: `url(${shows.show.image.original})` }}
        ></div>
      </div>
      <div className="bg-black py-12 w-full h-40 text-white relative z-0">
        <div className="w-full h-16 flex">
          <form className="w-full flex justify-center">
            <input
              className="w-9/12 h-16 py-2 rounded-sm bg-gray-700 justify-start p-12 "
              placeholder="Search"
              value={term}
              onChange={event => {
                setTerm(event.target.value);
              }}
              required
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-gray-600 text-black w-16 p-2 text-center"
            >
              {
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              }
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
