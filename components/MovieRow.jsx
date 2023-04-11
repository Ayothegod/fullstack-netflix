import Image from "next/image";
import React from "react";

const MovieRow = ({ trendingdata,title }) => {
  const imgPath = "http://image.tmdb.org/t/p/w500";
  const secUrl = "https://via.placeholder.com/600x400/cccccc/242020";
  return (
    <div>
      <p>{title}</p>
    <div className="scroller flex mb-10  gap-2 overflow-x-scroll overflow-y-hidden ">
      {trendingdata.map((data) => (
        <div key={data.id} className="flex-shrink-0 my-1">
          <Image
            src={imgPath+data.poster_path}
            alt={data.original_title}
            className=" object-cover object-center  rounded-md "
            width={150}
            height={100}
            />
        </div>
      ))}
    </div>
      </div>
  );
};

{
  /* <p key={idx}>{data.title}</p> */
}

export default MovieRow;
