import { useModal } from "@/lib/store";
import React from "react";
import MuiModal from "@mui/material/Modal";

const Modal = ({data}) => {
  const modal = useModal((state) => state.open);
  const changeModal = useModal((state) => state.changeOpen);
  return (
    <div className="h-full fixed inset-0 bg-[rgba(0,0,0,0.4)] text-white flex items-center justify-center">
      <div className="bg-[#fefefe] text-black w-60 h-60 ">
      <p>{data.title}</p>

      </div>
    </div>
  );
};

export default Modal;
