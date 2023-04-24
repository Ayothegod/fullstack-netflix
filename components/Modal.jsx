import React from "react";
import MuiModal from "@mui/material/Modal";
import Image from "next/image";

const Modal = ({ data, setOpen, open }) => {
  const imgPath = "http://image.tmdb.org/t/p/w500";
  const secUrl = "https://via.placeholder.com/600x400/cccccc/242020";
  console.log(data);

  return (
    <div className="h-full fixed inset-0 backdrop-blur-sm text-white flex items-center justify-center px-8">
      <div className="bg-[#151414] rounded-md p-2 text-[#999] w-full sm:w-3/4 md:w-1/2 ">
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
        <div>

        <p>{data.title}</p>
        <p>{data.overview.slice(0,180) }...</p>
        {/* <button>see more</button> */}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="bg-red-600 p-2 rounded-md"
          >
          Close Modal
        </button>
      </div>
    </div>
  );
};

// overview,title,release_data,media_type,original_language,vote_average,vote_count

export default Modal;
