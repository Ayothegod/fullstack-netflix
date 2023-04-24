import Image from "next/image";
import React, { useState } from "react";

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
            <div key={data.id} className="flex-shrink-0 my-1" onClick={() => setOpen(!open)}>
              <p className="hidden">{data.title}</p>
              <Image
                src={imgPath + data.poster_path}
                alt={data.original_title}
                className=" object-cover object-center  rounded-md "
                width={150}
                height={100}
              />
            </div>

            <div>
              <p>Hello the text</p>
            </div>
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
