import React, { useEffect, useState } from "react";
import Axios from "axios";

const Info = ({ match }) => {
  const [info, setInfo] = useState(``);

  useEffect(() => {
    let apiCall = async () => {
      let response = await Axios.get(
        `https://api.tvmaze.com/episodes/${match.params.id}`
      );
      setInfo(response.data);
    };
    apiCall();
  }, [match.params.id]);

  if (info) {
    return (
      <>
        <div className=" bg-opacity-75 bg-black py-8 flex w-full text-white justify-center md:justify-start">
          <h1 className="mx-6 font-mono font-bold">
            {" "}
            EPISODE {info.number} || {info.name}
          </h1>
        </div>
        <div
          className="w-full h-xxl bg-no-repeat bg-cover overflow-hidden z-negative flex"
          style={{ backgroundImage: `url(${info.image.original})` }}
        >
          <div
            className=" w-9/12 h-xl rounded-lg content-center overflow-hidden m-auto flex shadow-2xl"
            style={{ backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.85})` }}
          >
            <div className="w-0 md:w-6/12 h-xl rounded-l-sm md:overflow-hidden ">
              <img
                className="h-full w-full object-cover"
                src={info.image.original}
              ></img>
            </div>
            <div className="text-white m-auto px-12 py-12 md:w-6/12 overflow-hidden">
              <p className="h-full font-bold font-mono text-md break-words">
                {info.summary}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-opacity-75 bg-black py-12 w-full"></div>
      </>
    );
  }
  return <div>...Loading</div>;
};

export default Info;
