import React from "react";
import { useState, useEffect } from "react";
import Hero from "./Hero";
import ServerCall from "../API/serverCall";
import CardList from "./cardList";
import Invalid from "./invalid";
import History from "../history";

function Home() {
  const [search, setSearch] = useState(`doctor who`);
  const [shows, setShows] = useState(null);

  useEffect(() => {
    let apiCall = async () => {
      let response = await ServerCall.get(`shows`, {
        params: {
          q: search,
        },
      });
      console.log(response.data);
      setShows(response.data[0]);
    };
    apiCall();
  }, [search]);

  let handleSearch = term => {
    setSearch(term);
  };

  if (shows) {
    return (
      <div className="bg-gray-300">
        <Hero shows={shows} handleSearch={handleSearch} />
        <CardList id={shows.show.id} />
      </div>
    );
  }
  return <div></div>;
}

export default Home;
