import React, { useState } from "react";

const Accordion = () => {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "Dignissimos sequi architecto?",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "Voluptas praesentium facere?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
  ];

  const [show, setShow] = useState(false);

  return (
    <div className="px-4 my-1 md:my-2">


      {/* <div className="flex items-center justify-between bg-[#2D2D2D] px-4 py-4 border-b border-b-gray-900 ">
        <p className="text-lg md:text-3xl font-normal">What is Netflix</p>
        </div> */}


        {/* <button
          className={
            show
              ? " font-bold text-4xl border-none bg-transparent outline-none "
              : " font-bold text-4xl"
          }
          onClick={() => setShow(!show)}
        >
          <p className={show && "rotate-45"}>+</p>
        </button> */}
      {/* <div className={!show && "hidden"}>
        <div className={show && "bg-[#2D2D2D] p-4"}>Lorem ipsum dolor</div>
      </div> */}
    </div>
  );
};

export default Accordion;
