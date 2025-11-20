import React from "react";
import { WandSparkles } from "lucide-react";

const PromptInput = ({ value, onChange, onRandomClick, placeholder = "enter prompt ..." }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 border-[#2a2a2a] outline-none rounded-full py-3 pl-5 pr-[50px] w-full placeholder:text-gray-700 placeholder:italic"
      />

      <div
        onClick={onRandomClick}
        className="absolute right-1 top-0 bottom-0 flex items-center gap-[1px] py-1 cursor-pointer"
      >
        <span className="h-full bg-[#2a2a2a] text-[#f5f5f5] hover:shadow-xl rounded-full flex items-center justify-center w-fit px-3 gap-[8px]">
          <WandSparkles size={17} />
        </span>
      </div>
    </div>
  );
};

export default PromptInput;
