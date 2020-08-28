import React from "react";
import { useState, useEffect } from "react";
import Invalid from "./invalid";

import Axios from "axios";

import Card from "./card";

const CardList = ({ id }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    let apiCall = async () => {
      let response = await Axios.get(
        `http://api.tvmaze.com/shows/${id}/episodes`
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

  if (id && episodes.length) {
    return (
      <>
        <div className="flex justify-start my-6 ml-12">
          <h1 className=" text-4xl font-bold ">EPISODES</h1>
        </div>
        <div className="mt-16 px-4 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {episodes.map(episode => {
            return <Card key={episode.id} episodeInfo={episode} />;
          })}
        </div>
      </>
    );
  }
  return <Invalid />;
};

export default CardList;
