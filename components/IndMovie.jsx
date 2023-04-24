import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import { useModal } from '@/lib/store'

const IndMovie = ({ data }) => {
  const [open, setOpen] = useState(false);
  const openModal = useModal(state => state.openModal)
  const closeModal = useModal(state => state.closeModal)
  
  const imgPath = "http://image.tmdb.org/t/p/w500";
  const secUrl = "https://via.placeholder.com/600x400/cccccc/242020";
  
  // console.log(data);
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
      {open  && (
        <div>
          <Modal data={data} setOpen={setOpen} open={open}/>
        </div>
      )}
    </>
  );
};

export default IndMovie;
