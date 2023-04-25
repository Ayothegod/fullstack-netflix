import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const IndMovie = ({ data }) => {
  const [open, setOpen] = useState(false);
  
  const imgPath = "http://image.tmdb.org/t/p/w500";
  const secUrl = "https://via.placeholder.com/600x400/cccccc/242020";
  
  // console.log(data);
  return (
    <>
      <div
        key={data.id}
        className="flex-shrink-0 my-1 cursor-pointer py-2 transition-transform duration-500 ease-in-out"
        onClick={() => setOpen(!open)}
      >
        <Image
          src={imgPath + data.poster_path}
          alt={data.title}
          className=" object-cover object-center  rounded-md hover:scale-110 hover:mx-1 transition-transform duration-300 ease-in-out "
          width={150}
          height={100}
        />
      </div>
      {open  && (
        <div>
          <Modal data={data} setOpen={setOpen} open={open}/>
        </div>
      )}
    </>
  );
};

export default IndMovie;
