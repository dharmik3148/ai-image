import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

const ImageResult = ({ imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <div className="mt-6 flex flex-col items-center gap-3">
      <Image
        src={imageUrl}
        alt="Generated"
        width={400}
        height={400}
        className="rounded-lg shadow-lg border"
      />

      {/* Download Button */}
      <a
        href={imageUrl}
        download={`AI-IMAGE_${Math.random()
          .toString(36)
          .substring(2, 9)
          .toUpperCase()}.png`}
        className="mt-1 px-5 py-2 rounded-full flex items-center gap-2 bg-[#2a2a2a] text-white hover:bg-black transition shadow"
      >
        Download <Download size={17} />
      </a>
    </div>
  );
};

export default ImageResult;
