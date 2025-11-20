"use client";

import React, { useState } from "react";
import axios from "axios";
import { useTextToImageStore } from "@/store/textToImageStore";
import PromptInput from "@/components/PromptInput";
import GenerateButton from "@/components/GenerateButton";
import ImageResult from "@/components/ImageResult";
import StyleSelector from "@/components/StyleSelector";
import { Upload, X } from "lucide-react";

const ImageToImagePage = () => {
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        alert("Only images are allowed.");
        return;
      }
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        alert("Only images are allowed.");
        return;
      }
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleClearImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  const handleGenerate = async () => {
    if (!selectedImage) {
      alert("Please upload an image");
      return;
    }

    if (!userPrompt.trim() && !selectedStyle) {
      alert("Please enter a prompt or select a style");
      return;
    }

    setLoading(true);
    setGeneratedImage(null);

    const finalPrompt = selectedStyle
      ? `${selectedStyle.prompt} ${userPrompt}`
      : userPrompt;

    const formData = new FormData();
    formData.append("prompt", finalPrompt);
    formData.append("image", selectedImage);

    try {
      const res = await axios.post(
        "https://bobygames.com/ai-image/image-to-image.php",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
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
          Image To Image
        </h1>

        {/* Image Upload */}
        <div className="mb-5">
          <label
            htmlFor="image-upload"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer transition overflow-hidden relative
              ${
                isDragging
                  ? "border-blue-500 bg-blue-50"
                  : "border-[#2a2a2a] bg-white/5 backdrop-blur-sm hover:bg-white/10"
              }`}
          >
            {previewUrl ? (
              <div className="relative w-full h-full group">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-contain p-2"
                />
                <button
                  onClick={handleClearImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition shadow-md z-10"
                  title="Remove image"
                >
                  <X size={16} className="text-[#2a2a2a]" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-4 text-[#2a2a2a]" />
                <p className="mb-2 text-sm text-[#2a2a2a]">
                  <span className="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p className="text-xs text-[#2a2a2a]">
                  JPG, JPEG, PNG
                </p>
              </div>
            )}
            <input
              id="image-upload"
              type="file"
              className="opacity-0 absolute w-0 h-0 pointer-events-none"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
          {selectedImage && (
            <p className="mt-2 text-sm text-center text-green-600 font-medium">
              Selected: {selectedImage.name}
            </p>
          )}
        </div>

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

export default ImageToImagePage;
