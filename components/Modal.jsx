import React from "react";
import MuiModal from "@mui/material/Modal";
import Image from "next/image";
import {GrClose} from "react-icons/gr"
import {AiOutlineClose} from "react-icons/ai"



const Modal = ({ data, setOpen, open }) => {
  const imgPath = "http://image.tmdb.org/t/p/w500";
  const secUrl = "https://via.placeholder.com/600x400/cccccc/242020";
  console.log(data);

  return (
    <div className="h-full fixed inset-0 backdrop-blur-sm text-white flex items-center justify-center px-8">
      <div className="bg-[#151414] rounded-md p-2 text-[#999] w-full sm:w-3/4 md:w-1/2 relative ">
        <div className="absolute top-3 right-3 bg-neutral-900 p-2 rounded-full z-50 cursor-pointer" onClick={() => setOpen(!open)}>
          <AiOutlineClose className="text-white text-2xl"/>
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
        <div className="mb-2 mt-4 " >
        <p className="text-white font-semibold text-lg md:text-xl ">{data.title}</p>
        <p className="text-sm ">{data.overview.slice(0,180) }...</p>
        </div>
        {/* <button
          onClick={() => setOpen(!open)}
          className="bg-red-600 p-2 rounded-md"
          >
          Close Modal
        </button> */}
      </div>
    </div>
  );
};

// overview,title,release_data,media_type,original_language,vote_average,vote_count

export default Modal;
