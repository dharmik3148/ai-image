import React from "react";
import { Loader, Sparkles } from "lucide-react";

const GenerateButton = ({ onClick, loading, text = "Generate" }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="flex items-center mx-auto justify-center cursor-pointer hover:shadow-lg border-none bg-[#2a2a2a] text-[#f5f5f5] px-6 py-4 border-2 gap-2 rounded-full mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <Loader size={20} className="animate-spin" /> Generating
        </>
      ) : (
        <>
          <Sparkles size={20} /> {text}
        </>
      )}
    </button>
  );
};

export default GenerateButton;
