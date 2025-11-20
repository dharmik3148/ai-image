"use client";

import React, { useState } from "react";
import axios from "axios";
import { useTextToImageStore } from "@/store/textToImageStore";
import PromptInput from "@/components/PromptInput";
import GenerateButton from "@/components/GenerateButton";
import ImageResult from "@/components/ImageResult";
import StyleSelector from "@/components/StyleSelector";

const TextToImagePage = () => {
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

  const handleGenerate = async () => {
    if (!userPrompt.trim()) {
      alert("Please enter a prompt");
      return;
    }
    setLoading(true);
    setGeneratedImage(null);

    const finalPrompt = selectedStyle
      ? `${selectedStyle.prompt} ${userPrompt}`
      : userPrompt;

    try {
      const res = await axios.post(
        "https://bobygames.com/ai-image/text-to-image.php",
        new URLSearchParams({ prompt: finalPrompt }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          responseType: "blob",
        }
      );

      // Check if the response is actually JSON (error)
      if (
        res.data.type === "application/json" ||
        res.headers["content-type"]?.includes("application/json")
      ) {
        const text = await res.data.text();
        try {
          const json = JSON.parse(text);
          alert(json.message || "Failed to generate image");
        } catch (e) {
          alert("Failed to generate image: " + text);
        }
        return;
      }

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
        <h1 className="text-2xl font-bold text-[#2a2a2a] mb-5 text-center">
          Text To Image
        </h1>
        
        <PromptInput
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          onRandomClick={randomPrompt}
        />

        <GenerateButton onClick={handleGenerate} loading={loading} />

        <ImageResult imageUrl={generatedImage} />

        <StyleSelector
          styles={styles}
          selectedStyle={selectedStyle}
          onSelect={selectStyle}
        />
      </section>
    </div>
  );
};

export default TextToImagePage;
