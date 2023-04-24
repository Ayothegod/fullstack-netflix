import Image from "next/image";
import React, { useState } from "react";
import IndMovie from "./IndMovie";

const MovieRow = ({ trendingdata, title }) => {

  return (
    <div className="mb-2">
      <p className="text-2xl ">{title}</p>
      <div className="scroller flex gap-2 overflow-x-scroll overflow-y-hidden ">
        {trendingdata.map((data, index) => (
          <>
            <IndMovie data={data}/>
          </>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
