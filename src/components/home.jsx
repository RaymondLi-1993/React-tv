import React from "react";
import { useState, useEffect } from "react";
import Hero from "./Hero";
import ServerCall from "../API/serverCall";

import Invalid from "./invalid";
import History from "../history";

function Home() {
  const [search, setSearch] = useState(`doctor who`);
  const [shows, setShows] = useState(null);

  useEffect(() => {
    let apiCalls = async () => {
      let response = await ServerCall.get(`shows`, {
        params: {
          q: search,
        },
      });
      setShows(response.data);
    };
    apiCalls();
  }, [search]);

  let handleSearch = term => {
    setSearch(term);
  };

  if (shows) {
    return (
      <div className="bg-gray-300">
        <Hero shows={shows} handleSearch={handleSearch} />
      </div>
    );
  }
  return <div></div>;
}

export default Home;
