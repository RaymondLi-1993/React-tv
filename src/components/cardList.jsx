import React from "react";
import { useState, useEffect } from "react";
import Invalid from "./invalid";
import History from "../history";

import Axios from "axios";

import Card from "./card";

const CardList = ({ id }) => {
  const [episodes, setEpisodes] = useState([]);
  const [count, setCount] = useState(12);

  useEffect(() => {
    let apiCall = async () => {
      let response = await Axios.get(
        `https://api.tvmaze.com/shows/${id}/episodes`
      );
      let filtered = response.data
        .map(items => {
          return items;
        })
        .filter(items => {
          return items.image !== null;
        });
      setEpisodes(filtered);
    };
    apiCall();
  }, [id]);

  let loadMore = () => {
    setCount(count + 8);
  };

  if (id && episodes.length) {
    return (
      <>
        <div className="flex justify-start my-6 ml-12">
          <h1 className=" text-4xl font-bold ">EPISODES</h1>
        </div>
        <div className="mt-16 px-4 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {episodes.slice(0, count).map(episode => {
            return <Card key={episode.id} episodeInfo={episode} />;
          })}
        </div>
        <div className="w-full h-32 flex justify-center items-center">
          <button
            onClick={() => loadMore()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-64 h-16"
          >
            LOAD MORE
          </button>
        </div>
      </>
    );
  }
  return <div>{episodes === [] ? History.push(`/invalid`) : null}</div>;
};

export default CardList;
