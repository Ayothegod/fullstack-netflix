import React, { useState } from "react";
import MuiModal from "@mui/material/Modal";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ data, setOpen, open }) => {
  const [seeMore, setSeeMore] = useState(true);
  const imgPath = "http://image.tmdb.org/t/p/w500";
  const secUrl = "https://via.placeholder.com/600x400/cccccc/242020";
  console.log(data);

  return (
    <div className="h-full fixed inset-0 backdrop-blur-sm text-white flex items-center justify-center px-8">
      <div className="bg-[#151414] rounded-md p-2 text-[#999] w-full sm:w-3/4 md:w-2/3 relative ">
        <div
          className="absolute top-3 right-3 bg-neutral-900 p-2 rounded-full z-50 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <AiOutlineClose className="text-white text-2xl" />
        </div>
        <div className="w-full h-48 sm:h-60 md:h-72 relative">
          <Image
            src={imgPath + data.poster_path}
            alt={data.original_title}
            className="object-cover object-center rounded-md  "
            fill
            placeholder="blur"
            blurDataURL="https://placehold.co"
          />
        </div>
        <div className="mb-2 mt-4 flex gap-x-2 ">
          <div className="flex flex-col gap-y-2  md:w-2/3">
            <p className="text-white font-semibold text-lg md:text-xl ">
              {data.title}
            </p>

            {seeMore ? (
              <>
                {" "}
                <p className="text-sm ">
                  {data.overview.slice(0, 180)}...
                  <button className="text-white text-xs md:text-sm" onClick={() => setSeeMore(!seeMore)}>
                    see more
                  </button>
                </p>
              </>
            ) : (
              <>
                <p className="text-sm ">
                  {data.overview}
                  <button className="text-white text-xs md:text-sm " onClick={() => setSeeMore(!seeMore)}>
                    see less
                  </button>
                </p>
              </>
            )}

            <p className="text-white text-xs">
              {data.release_date}{" "}
              <span className="border border-neutral-600 rounded-sm text-sm px-1">
                HD
              </span>
            </p>
          </div>
          <div className="hidden md:flex md:flex-col md:justify-center gap-2">
            <p>
              Original Language:{" "}
              <span className="text-white capitalize">
                {data.original_language}
              </span>
            </p>
            <p>
              Total Votes:{" "}
              <span className="text-white capitalize">{data.vote_count}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// overview,title,release_data,media_type,original_language,vote_average,vote_count

export default Modal;
