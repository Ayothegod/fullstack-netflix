import Image from "next/image";
import { useState } from "react";

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
        {/* <p>{data.title}</p> */}
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
          <p>Hello the text</p>
        </div>
      )}
    </>
  );
};

export default IndMovie;

{
  open && (
    <div>
      <p>Hello the text</p>
    </div>
  );
}
