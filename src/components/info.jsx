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
          className="w-full h-xxl bg-no-repeat bg-cover overflow-hidden z-negative flex justify-evenly relative"
          style={{ backgroundImage: `url(${info.image.original})` }}
        >
          <div
            className=" w-10/12 h-xl  rounded-md  overflow-hidden m-auto shadow-2xl flex flex-row"
            style={{ backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.7})` }}
          >
            <div className="flex w-3/12 overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover"
                src={info.image.original}
              ></img>
            </div>
            <div className=" w-6/12 h-full relative z-0 flex-grow flex justify-center items-center">
              <div className="absolute z-50 w-9/12 h-48 m-auto px-12 py-12 bg-white rounded-lg">
                <h4 className=" text-xl leading-relaxed text-black">{`${info.summary.replace(
                  /(<p[^>]+?>|<p>|<\/p>)/gim,
                  ""
                )}`}</h4>
              </div>
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
