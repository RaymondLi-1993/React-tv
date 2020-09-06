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
      <div className="h-xxxl">
        <div
          className="bg-fixed py-64 bg-no-repeat  h-xxxl bg-cover z-0"
          style={{ backgroundImage: `url(${shows.show.image.original})` }}
        ></div>
      </div>
      <div className="bg-black py-12 w-full h-32 text-white relative z-0">
        <div className="w-full h-12 flex">
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center items-center"
          >
            <input
              className="w-9/12 h-16 py-2 rounded-sm bg-gray-700 justify-start p-12 outline-none"
              placeholder="Search"
              value={term}
              onChange={event => {
                setTerm(event.target.value);
              }}
            />
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
