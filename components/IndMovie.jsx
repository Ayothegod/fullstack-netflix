import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const IndMovie = ({ data }) => {
  const [open, setOpen] = useState(false);
  console.log(data);

  const imgPath = "http://image.tmdb.org/t/p/w500";
  const secUrl = "https://via.placeholder.com/600x400/cccccc/242020";

  return (
    <>
      <div
        key={data.id}
        className="flex-shrink-0 my-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <Image
          src={imgPath + data.poster_path}
          alt={data.original_title}
          className=" object-cover object-center  rounded-md "
          width={150}
          height={100}
        />
      </div>
      {open && (
        <div>
          <Modal data={data}/>
        </div>
      )}
    </>
  );
};

export default IndMovie;
