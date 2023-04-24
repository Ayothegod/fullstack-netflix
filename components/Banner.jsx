import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import {CiCircleQuestion} from "react-icons/ci"
import {FiPlay} from "react-icons/fi"
import Modal from "./Modal";

const Banner = () => {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const res = fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9b0b141b44e2b1a77e4965a9ac513ca4"
    )
      .then((res) => res.json())
      .then((response) => {
        const data = response.results;
        const single = Math.floor(Math.random() * data.length);
        const singleObj = data[single];
        setData(singleObj);
      });
  }, []);
  // const imgPath = "http://image.tmdb.org/t/p/w500"
  const imgPath = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      {!data && 
      <div className="flex items-center justify-center">
        <p>Loading Content ...</p>
        </div>}
      <div
        className=" bg-no-repeat bg-cover w-full h-[500px] sm:h-[400px] md:h-[500px] "
        style={{ backgroundImage: `url(${imgPath + data.poster_path})` }}
      >
        <div className="backdrop-brightness-50 p-4 flex flex-col justify-end h-full gap-2  ">
          <p className="text-4xl font-bold ">{data.title}</p>
          <p className="w-full sm:w-2/3 text-sm">{data.overview}</p>
          <div className="flex gap-2 md:mb-20">
            <button className="flex items-center gap-1 bg-white py-2 px-4 text-black rounded-md font-bold ">
                <FiPlay className="text-black h-5 w-5"/> Play
            </button>
            <button className="flex items-center gap-1 bg-black py-2 px-4 text-white rounded-md hover:bg-white hover:text-black hover:font-medium " onClick={() => setOpen(!open)}>
                <CiCircleQuestion className=" h-5 w-5"/> More Info
            </button>
          </div>
        </div>
      </div>
      {open  && (
        <div>
          <Modal data={data} setOpen={setOpen} open={open}/>
        </div>
      )}
    </div>
  );
};

export default Banner;
