import React, { useEffect, useState } from "react";
import Axios from "axios";

import Seasons from "./seasons";
import Spinner from "./spinner";

const Info = ({ match }) => {
  const [info, setInfo] = useState(``);
  const [check, setCheck] = useState(true);
  const [select, setSelected] = useState(null);

  useEffect(() => {
    let apiCall = async () => {
      let response = await Axios.get(
        `https://api.tvmaze.com/shows/${match.params.id}/episodes`
      );
      setInfo(response.data);
      setCheck(true);
    };
    apiCall();
  }, [match.params.id]);

  const handleClick = props => {
    setSelected(props);
    setCheck(false);
    window.scrollTo(0, 0);
  };

  if (info) {
    console.log(select);
    return (
      <>
        <div className=" h-24 bg-opacity-75 bg-black py-8 flex w-full text-white justify-center md:justify-start">
          {/* <h1 className="mx-6 font-mono font-bold">
            {" "}
            EPISODE {select.number} || {select.name}
          </h1> */}
        </div>
        <div
          className="w-full h-xxl bg-no-repeat bg-cover overflow-hidden z-negative flex justify-evenly relative"
          style={
            info[0].image
              ? check === true
                ? { backgroundImage: `url(${info[0].image.original})` }
                : { backgroundImage: `url(${select.src})` }
              : {
                  backgroundImage: `https://www.iceagetrail.org/wp-content/uploads/2016/11/currently-unavailable.png`,
                }
          }
        >
          <div
            className=" w-10/12 h-xl  rounded-md  overflow-hidden m-auto shadow-2xl flex flex-row"
            style={{ backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.7})` }}
          >
            <div className="flex w-3/12 overflow-hidden rounded-lg">
              <img
                alt="images"
                className="h-full w-full object-cover"
                src={
                  info[0].image
                    ? check === true
                      ? info[0].image.original
                      : select.src
                    : `https://www.iceagetrail.org/wp-content/uploads/2016/11/currently-unavailable.png`
                }
              ></img>
            </div>
            <div className=" w-6/12 h-full relative z-0 flex-grow flex justify-center items-center">
              <h4 className=" text-xl  font-grand font-bold w-9/12 leading-relaxed text-white">
                {info[0].summary
                  ? check === true
                    ? `${info[0].summary.replace(
                        /(<p[^>]+?>|<p>|<\/p>)/gim,
                        ""
                      )}`
                    : `${select.alt.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")}`
                  : `No Description available`}
              </h4>
            </div>
          </div>
        </div>
        <div className="bg-opacity-75 bg-black py-12 w-full h-32"></div>
        <Seasons shows={info} check={{ key: true }} handleClick={handleClick} />
      </>
    );
  }
  return <Spinner />;
};

export default Info;
