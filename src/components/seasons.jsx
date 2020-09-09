import React, { useState } from "react";
import Card from "./card";
import Episodes from "./episodes";

const Seasons = ({ shows, check, handleClick }) => {
  const [count, setCount] = useState(12);

  let loadMore = () => {
    setCount(count + 8);
  };

  return (
    <>
      <div className="flex justify-start my-6 ml-12">
        {/* <h1 className=" text-4xl font-bold "></h1> */}
      </div>
      <div className="mt-16 px-4 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {shows.slice(0, count).map(season => {
          if (check.key) {
            return (
              <Episodes
                key={season.id}
                id={season.id}
                name={season.name}
                image={season.image}
                summary={season.summary}
                handleClick={handleClick}
              />
            );
          }
          return (
            <Card key={season.id} id={season.show.id} Info={season.show} />
          );
        })}
      </div>
      {check.key ? (
        <div className="w-full h-32 flex justify-center items-center">
          <button
            onClick={() => loadMore()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-64 h-16"
          >
            LOAD MORE
          </button>
        </div>
      ) : null}
      <div className="w-full h-32 flex justify-center items-center"></div>
    </>
  );
};

export default Seasons;
