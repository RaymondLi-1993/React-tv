import React from "react";
import { useState } from "react";

const Hero = ({ shows, handleSearch }) => {
  const [term, setTerm] = useState(``);
  const [error, setError] = useState(``);

  let handleSubmit = event => {
    event.preventDefault();
    if (term) {
      handleSearch(term);
      setTerm(``);
      setError(``);
    } else {
      setError(`Please enter a valid search`);
    }
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
              className="w-9/12 h-16 py-2 rounded-sm bg-gray-700 justify-start p-12 outline-none"
              placeholder="Search"
              value={term}
              onChange={event => {
                setTerm(event.target.value);
              }}
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-gray-600 text-black w-16 p-2 text-center outline-none"
            >
              {
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="outline-none"
                >
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                </svg>
              }
            </button>
          </form>
        </div>
        <div className="w-full h-8 flex items-center">
          <h6 className=" ml-48 my-2 text-red-600">{error}</h6>
        </div>
      </div>
    </>
  );
};

export default Hero;
