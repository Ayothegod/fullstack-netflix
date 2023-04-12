import { useModal } from "@/lib/store";
import React from "react";
import MuiModal from "@mui/material/Modal";

const Modal = () => {
  const modal = useModal((state) => state.open);
  const changeModal = useModal((state) => state.changeOpen);
  return (
    <div>
      
      <button onClick={handleOpen}>Open modal</button>
      <div
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div >
          <p>
            Text in a modal
          </p>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
