"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <h2 className="text-3xl md:text-4xl max-sm:text-[20px] max-sm:h-[100px] h-[150px] flex items-center font-bold text-[#2a2a2a] merriweather-font text-center">
      Unleash Your Creativity -{" "}
      <span className="">
        <Typewriter
          words={["AI Images", "Gen AI"]}
          loop={true}
          cursor
          cursorStyle="."
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h2>
  );
};

export default TypeWriter;
