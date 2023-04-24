import { useModal } from "@/lib/store";
import React from "react";
import MuiModal from "@mui/material/Modal";

const Modal = ({data}) => {
  const modal = useModal((state) => state.open);
  const changeModal = useModal((state) => state.changeOpen);
  return (
    <div className="h-full absolute top-0 left-0 backdrop-blur-xl text-white">
      <div className="bg-black ">
      <p>{data.title}</p>

      </div>
    </div>
  );
};

export default Modal;
