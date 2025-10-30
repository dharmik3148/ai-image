"use client";

import { useTextToImageStore } from "@/store/textToImageStore";
import axios from "axios";
import { Download, Loader, Sparkles, WandSparkles } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const {
    userPrompt,
    setUserPrompt,
    styles,
    selectedStyle,
    selectStyle,
    randomPrompt,
  } = useTextToImageStore();

  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const finalPrompt = selectedStyle
    ? `${selectedStyle.prompt} ${userPrompt}`
    : userPrompt;

  // const handleGenerate = async () => {
  //   if (!finalPrompt.trim()) {
  //     alert("Please enter a prompt");
  //     return;
  //   }
  //   setLoading(true);
  //   setGeneratedImage(null);

  //   try {
  //     const res = await axios.post(
  //       "/api/text-to-image",
  //       { prompt: finalPrompt },
  //       { responseType: "blob" } // expecting raw image
  //     );

  //     const imgUrl = URL.createObjectURL(res.data);
  //     setGeneratedImage(imgUrl);
  //   } catch (err) {
  //     console.error("Generation failed:", err.message);
  //     alert("Failed to generate image.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleGenerate = async () => {
    if (!finalPrompt.trim()) {
      alert("Please enter a prompt");
      return;
    }
    setLoading(true);
    setGeneratedImage(null);

    try {
      const res = await axios.post(
        "https://bobygames.com/ai-image/text-to-image.php",
        new URLSearchParams({ prompt: finalPrompt }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          responseType: "blob",
        }
      );

      const imgUrl = URL.createObjectURL(res.data);
      setGeneratedImage(imgUrl);
    } catch (err) {
      console.error("Generation failed:", err.message);
      alert("Failed to generate image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center merriweather-font">
      <section className="w-[60%] max-sm:w-[95%]">
        <div className="relative">
          <input
            type="text"
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            placeholder="enter prompt ..."
            className="border-2 border-[#2a2a2a] outline-none rounded-full py-3 pl-5 pr-[50px] w-full placeholder:text-gray-700 placeholder:italic"
          />

          <div
            onClick={randomPrompt}
            className="absolute right-1 top-0 bottom-0 flex items-center gap-[1px] py-1"
          >
            <span className="h-full bg-[#2a2a2a] text-[#f5f5f5] hover:shadow-xl rounded-full flex items-center justify-center w-fit px-3 gap-[8px]">
              <WandSparkles size={17} />
            </span>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="flex items-center mx-auto justify-center cursor-pointer hover:shadow-lg border-none bg-[#2a2a2a] text-[#f5f5f5] px-6 py-4 border-2 gap-2 rounded-full mt-4"
        >
          {loading ? (
            <>
              <Loader size={20} className="animate-spin" /> Generating
            </>
          ) : (
            <>
              <Sparkles size={20} /> Generate
            </>
          )}
        </button>

        {generatedImage && (
          <div className="mt-6 flex flex-col items-center gap-3">
            <Image
              src={generatedImage}
              alt="Generated"
              width={400}
              height={400}
              className="rounded-lg shadow-lg border"
            />

            {/* Download Button */}
            <a
              href={generatedImage}
              download={`AI-IMAGE_${Math.random()
                .toString(36)
                .substring(2, 9)
                .toUpperCase()}.png`}
              className="mt-1 px-5 py-2 rounded-full flex items-center gap-2 bg-[#2a2a2a] text-white hover:bg-black transition shadow"
            >
              Download <Download size={17} />
            </a>
          </div>
        )}

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
                  onClick={() =>
                    isActive ? selectStyle(null) : selectStyle(style)
                  }
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
      </section>
    </div>
  );
};

export default page;
