import Image from "next/image";
import React, { useState } from "react";
import IndMovie from "./IndMovie";

const MovieRow = ({ trendingdata, title }) => {
  const [open,setOpen] = useState(false)

  const imgPath = "http://image.tmdb.org/t/p/w500";
  const secUrl = "https://via.placeholder.com/600x400/cccccc/242020";
  return (
    <div className="mb-2">
      <p className="text-2xl ">{title}</p>
      <div className="scroller flex   gap-2 overflow-x-scroll overflow-y-hidden ">
        {trendingdata.map((data, index) => (
          <>
            <IndMovie data={data}/>
          </>
        ))}
      </div>
    </div>
  );
};

{
  /* <p key={idx}>{data.title}</p> */
}

export default MovieRow;
