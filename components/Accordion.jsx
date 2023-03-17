import React, { useState } from "react";

const Accordion = () => {

  const [show, setShow] = useState(false);

  return (
    <div className="px-4 my-1 md:my-2">
        <div
          className="flex items-center justify-between bg-[#2D2D2D] px-4 py-4 border-b border-b-gray-900 "
        >
          <p className="text-lg md:text-3xl font-normal" >
            What is Netflix
          </p>

          <button
            className={
              show
                ? " font-bold text-4xl border-none bg-transparent outline-none "
                : " font-bold text-4xl"
            }
            onClick={() => setShow(!show)}
          >
            <p className={show && "rotate-45"}>+</p>
          </button>
        </div>
      <div className={!show && "hidden"}>
        <div className={show && "bg-[#2D2D2D] p-4"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid hic
          eligendi fugiat voluptates nesciunt debitis vero quisquam velit
          numquam commodi?
        </div>
      </div>
    </div>
  );
};

export default Accordion;
