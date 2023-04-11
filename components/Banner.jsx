import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import {CiCircleQuestion} from "react-icons/ci"
import {FiPlay} from "react-icons/fi"

// AiOutlinePlusCircle,CiCirclePlus,BiLike,AiFillLike,AiOutlineClockCircle,BsFillClockFill,FaShare,IoMdShareAlt,FiYoutube,FaYoutube,RxSpeakerLoud,HiSpeakerWave,MdCancel,MdOutlineCancel,


const Banner = () => {
  const [obj, setObj] = useState("");
  useEffect(() => {
    const res = fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9b0b141b44e2b1a77e4965a9ac513ca4"
    )
      .then((res) => res.json())
      .then((response) => {
        const data = response.results;
        const single = Math.floor(Math.random() * data.length);
        const singleObj = data[single];
        setObj(singleObj);
      });
  }, []);
  // const imgPath = "http://image.tmdb.org/t/p/w500"
  const imgPath = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      {!obj && "Loading..."}
      <div
        className=" bg-no-repeat bg-cover w-full h-[500px] sm:h-[400px] md:h-[500px] "
        style={{ backgroundImage: `url(${imgPath + obj.poster_path})` }}
      >
        <div className="backdrop-brightness-50 p-4 flex flex-col justify-end h-full gap-2  ">
          <p className="text-4xl font-bold ">{obj.title}</p>
          <p className="w-full sm:w-2/3 text-sm">{obj.overview}</p>
          <div className="flex gap-2 md:mb-20">
            <button className="flex items-center gap-1 bg-white py-2 px-4 text-black rounded-md font-bold ">
                <FiPlay className="text-black h-5 w-5"/> Play
            </button>
            <button className="flex items-center gap-1 bg-black py-2 px-4 text-white rounded-md hover:bg-white hover:text-black hover:font-medium  ">
                <CiCircleQuestion className=" h-5 w-5"/> More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
