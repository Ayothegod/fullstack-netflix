import Image from "next/image";
import React, { useState } from "react";
import MovieDetails from "./MovieDetails";

const MovieRow = ({ trendingdata, title }) => {
const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
  setClickedIndex(state => ({
    ...state, // <-- copy previous state
    [index]: !state[index] // <-- update value by index key
  }));
  console.log(clickedIndex);
};
  

  const imgPath = "http://image.tmdb.org/t/p/w500";
  const secUrl = "https://via.placeholder.com/600x400/cccccc/242020";
  return (
    <div className="mb-2">
      <p className="text-2xl ">{title}</p>
      <div className="scroller flex   gap-2 overflow-x-scroll overflow-y-hidden ">
        {trendingdata.map((data,index) => (
          <>
          <div key={data.id} className="flex-shrink-0 my-1">
            <p className="hidden">{data.title}</p>
            <Image
              src={imgPath + data.poster_path}
              alt={data.original_title}
              className=" object-cover object-center  rounded-md "
              width={150}
              height={100}
              onClick={handleClick(index)}
              />
            {clickedIndex[index] ? <p>hello</p> : ""} 
          </div>
          <div>
          </div>
              </>
        ))}
      </div>
        {/* {showModal && <MovieDetails/>} */}
    </div>
  );
};

{
  /* <p key={idx}>{data.title}</p> */
}

export default MovieRow;
