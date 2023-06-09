import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useStore } from "@/lib/store";
import IndMovie from "./IndMovie";
import { MdArrowForward } from "react-icons/md";

const Favourites = () => {
  const [newFavourites, setNewFavourites] = useState([]);
  const favourites = useStore((state) => state.favourites);

  const imgPath = "http://image.tmdb.org/t/p/w500";
  const secUrl = "https://via.placeholder.com/600x400/cccccc/242020";

  useEffect(() => {
    setNewFavourites(favourites)
  },[favourites])

  return (
    <div>
      {
        favourites && <>
      <p className="text-xl flex items-center gap-2">
        Favourites{" "}
        <span className="flex items-center gap-2 text-[#999] text-sm">
          <MdArrowForward className="mt-1"/>
          click on any movie card to add to favourites{" "}
        </span>
      </p>
      <div className="scroller flex gap-2 overflow-x-scroll overflow-y-hidden ">
        { newFavourites.map((data, index) => (
          <>
            <IndMovie data={data} />
          </>
        ))}
      </div>
      </>
      }
    </div>
  );
};

export default Favourites;
