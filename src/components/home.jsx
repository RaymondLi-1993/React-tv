import React from "react";
import { useState, useEffect } from "react";
import Hero from "./Hero";
import ServerCall from "../API/serverCall";

import History from "../history";
import Spinner from "./spinner";

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
      const data = await response.data;
      if (data.length === 0) {
        History.push(`/invalid`);
      } else {
        setShows(response.data);
      }
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
