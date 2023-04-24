import { useModal } from "@/lib/store";
import React from "react";
import MuiModal from "@mui/material/Modal";

const Modal = ({data}) => {
  const modal = useModal((state) => state.open);
  const changeModal = useModal((state) => state.changeOpen);
  return (
    <div className="h-full fixed inset-0 backdrop-blur-lg text-white flex items-center justify-center p-4">
      <div className="bg-[#151414] rounded-md p-4 text-[#999] w-full sm:w-3/4 md:w-1/2 ">
      <p>{data.title}</p>

      </div>
    </div>
  );
};

export default Modal;
