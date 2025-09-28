import { create } from "zustand";

const RANDOM_PROMPTS = [
  "A futuristic neon city under the rain",
  "A cozy Ghibli-style village surrounded by forests",
  "Abstract colorful shapes melting into each other",
  "Epic fantasy castle floating in the clouds",
  "A retro pixel art cyberpunk street",
  "Watercolor painting of a magical fox",
  "Ultra realistic portrait with cinematic lighting",
  "Cartoon-style astronaut riding a cat",
  "Surreal dreamscape with floating islands",
  "Minimalist geometric abstract artwork",
  "Cyberpunk samurai standing in neon Tokyo",
  "Magical forest glowing with fireflies",
  "Vintage oil painting of a noble knight",
  "Dreamlike surreal portrait with melting clocks",
  "Playful anime character with oversized weapon",
];

export const useTextToImageStore = create((set) => ({
  userPrompt: "",
  selectedStyle: null,
  styles: [
    {
      title: "Ghibli Art",
      image: "/text2image/ghibli.png",
      prompt:
        "whimsical hand-painted illustration in the style of Studio Ghibli, dreamy atmosphere, lush scenery",
    },
    {
      title: "Abstract",
      image: "/text2image/abstract.png",
      prompt:
        "colorful abstract digital painting, surreal forms, expressive brushstrokes, modern art",
    },
    {
      title: "Neon Cyberpunk",
      image: "/text2image/cyberpunk.png",
      prompt:
        "futuristic neon-lit cyberpunk cityscape, glowing lights, rain-soaked streets, cinematic",
    },
    {
      title: "Pencil Sketch",
      image: "/text2image/pencilsketch.png",
      prompt:
        "hand-drawn pencil sketch, detailed line art, monochrome, rough shading",
    },
    {
      title: "Realistic Portrait",
      image: "/text2image/realisticportrait.png",
      prompt:
        "ultra realistic cinematic portrait photography, 8k resolution, dramatic lighting",
    },
    {
      title: "Fantasy",
      image: "/text2image/fantasy.png",
      prompt:
        "epic fantasy artwork, magical forest, glowing light, mystical creatures, painterly style",
    },
    {
      title: "Anime",
      image: "/text2image/anime.png",
      prompt:
        "anime illustration, vibrant colors, expressive characters, dynamic action pose",
    },
    {
      title: "Oil Painting",
      image: "/text2image/oilpainting.png",
      prompt:
        "traditional oil painting on canvas, baroque style, rich texture, dramatic shadows",
    },
    {
      title: "Watercolor",
      image: "/text2image/watercolor.png",
      prompt:
        "soft watercolor painting, pastel tones, flowing brush strokes, artistic wash effect",
    },
    {
      title: "Minimalist",
      image: "/text2image/minimalist.png",
      prompt:
        "minimalist clean vector art, simple shapes, flat colors, elegant and modern design",
    },
    {
      title: "Retro VHS",
      image: "/text2image/retrovhs.png",
      prompt:
        "retro 80s VHS aesthetic, neon glow, film grain, scanlines, nostalgic mood",
    },
    {
      title: "Surreal",
      image: "/text2image/surreal.png",
      prompt:
        "dreamlike surrealist artwork, melting objects, Salvador Dalí inspired, imaginative world",
    },
    {
      title: "Pixel Art",
      image: "/text2image/pixelart.png",
      prompt:
        "retro pixel art, 16-bit game aesthetic, blocky shapes, vibrant colors",
    },
    {
      title: "Cartoon",
      image: "/text2image/cartoon.png",
      prompt:
        "playful cartoon style, bold outlines, exaggerated expressions, bright colors",
    },
  ],
  setUserPrompt: (text) => set({ userPrompt: text }),
  selectStyle: (style) => set({ selectedStyle: style }),
  clearStyle: () => set({ selectedStyle: null }),

  randomPrompt: () => {
    const rand =
      RANDOM_PROMPTS[Math.floor(Math.random() * RANDOM_PROMPTS.length)];
    set({ userPrompt: rand });
  },

  appendRandomPrompt: () => {
    const rand =
      RANDOM_PROMPTS[Math.floor(Math.random() * RANDOM_PROMPTS.length)];
    set((state) => ({ userPrompt: `${state.userPrompt} ${rand}`.trim() }));
  },
}));
