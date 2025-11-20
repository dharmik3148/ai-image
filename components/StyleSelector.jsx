import React from "react";
import Image from "next/image";

const StyleSelector = ({ styles, selectedStyle, onSelect }) => {
  return (
    <div className="mt-1 pb-5">
      <h3 className="mb-2">Choose a Style:</h3>
      <div
        className="grid gap-3 justify-center mt-6 
            grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7"
      >
        {styles.map((style) => {
          const isActive = selectedStyle?.title === style.title;
          return (
            <div
              key={style.title}
              onClick={() => onSelect(isActive ? null : style)}
              className={`relative cursor-pointer p-[2px] rounded-md 
                overflow-hidden border-2 transition 
      ${
        isActive
          ? "border-black shadow-xl bg-[#f5f5f5]"
          : "border-transparent hover:border-[#2a2a2a]"
      }`}
            >
              <Image
                src={style.image}
                alt={style.title}
                width={300}
                height={300}
                className="object-cover rounded w-full aspect-square"
              />
              <div
                className={`absolute bottom-1 left-1 right-1 
                  backdrop-blur-sm text-[#2a2a2a] 
                  text-[12px] rounded shadow-sm 
                  flex items-center justify-center text-center py-[3px]
        ${isActive ? "bg-[#2a2a2a] text-[#f5f5f5]" : "bg-white/80"}`}
              >
                {style.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
