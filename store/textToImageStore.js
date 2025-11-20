import { create } from "zustand";

const RANDOM_PROMPTS = [
  "A futuristic neon city under the rain, cyberpunk style, highly detailed, 8k resolution",
  "A cozy Ghibli-style village surrounded by forests, soft lighting, anime aesthetic",
  "Abstract colorful shapes melting into each other, fluid art, vibrant colors",
  "Epic fantasy castle floating in the clouds, majestic, cinematic lighting, matte painting",
  "A retro pixel art cyberpunk street, neon lights, 16-bit style, nostalgic",
  "Watercolor painting of a magical fox, ethereal, soft brush strokes, artistic",
  "Ultra realistic portrait of a cyborg woman, cinematic lighting, detailed skin texture, 8k",
  "Cartoon-style astronaut riding a cat in space, playful, vibrant, vector art",
  "Surreal dreamscape with floating islands and waterfalls, Salvador Dali style, imaginative",
  "Minimalist geometric abstract artwork, clean lines, bauhaus style, modern",
  "Cyberpunk samurai standing in neon Tokyo, rain, reflection, dramatic atmosphere",
  "Magical forest glowing with fireflies, enchanted, mystical, fantasy art",
  "Vintage oil painting of a noble knight, baroque style, dramatic shadows, textured",
  "Dreamlike surreal portrait with melting clocks, time distortion, artistic",
  "Playful anime character with oversized weapon, dynamic pose, cell shaded",
  "Steampunk city with flying gears and steam engines, victorian sci-fi, detailed",
  "A post-apocalyptic wasteland with nature taking over, overgrown ruins, atmospheric",
  "Cybernetic dragon flying over a futuristic city, mechanical details, glowing eyes",
  "A serene zen garden with cherry blossoms falling, peaceful, traditional japanese art",
  "Abstract fluid art with gold leaf accents, luxury, marble texture, elegant",
  "A noir detective standing in a rainy alleyway, black and white, high contrast, moody",
  "Fantasy warrior princess with glowing armor, epic pose, digital painting",
  "A cute robot watering plants in a greenhouse, solarpunk, wholesome, bright",
  "Dark fantasy necromancer raising the dead, green magic, eerie atmosphere",
  "A space station orbiting a purple planet, sci-fi, realistic, cinematic",
  "Traditional japanese ukiyo-e style wave, woodblock print aesthetic, textured",
  "A haunted mansion on a hill, gothic horror, fog, moonlight, spooky",
  "Cyberpunk street food vendor, neon signs, steam, detailed environment",
  "A majestic phoenix rising from ashes, fire effects, dynamic, fantasy",
  "Retro synthwave landscape with grid mountains, 80s aesthetic, neon purple and blue",
  "A whimsical treehouse village, fantasy, warm lighting, cozy",
  "Abstract expressionist splash art, chaotic, energetic, vibrant",
  "A futuristic racing car speeding through a tunnel, motion blur, speed, dynamic",
  "A magical library with flying books, fantasy, dust motes, god rays",
  "Portrait of an alien royalty, exotic features, jewelry, sci-fi concept art",
  "A giant mech fighting a kaiju in a city, cinematic scale, destruction, epic",
  "Minimalist landscape with a single tree, calming, pastel colors, flat design",
  "A pirate ship sailing on a sea of stars, fantasy, magical, adventure",
  "Cyberpunk hacker in a room full of screens, green code, dark atmosphere",
  "A fairy sitting on a mushroom, macro photography style, bokeh, magical",
  "Abstract geometric pattern, 3d render, metallic texture, modern",
  "A viking warrior screaming in battle, intense, blood and dirt, realistic",
  "A futuristic hospital with healing pods, clean white, sci-fi, medical",
  "A dragon sleeping on a hoard of gold, fantasy, detailed scales, treasure",
  "Retro comic book style explosion, pop art, halftone dots, bold lines",
  "A serene underwater city, bioluminescent lights, coral reefs, fantasy",
  "Abstract smoke art forming a skull, wispy, dark, mysterious",
  "A futuristic soldier in power armor, heavy weapons, battle worn, sci-fi",
  "A magical potion shop, cluttered shelves, glowing bottles, fantasy interior",
  "Portrait of a goddess with flowers in hair, art nouveau style, elegant, intricate",
  "A cyberpunk motorcycle chase, neon trails, speed, action",
  "A cozy coffee shop in the rain, lo-fi aesthetic, warm light, relaxing",
  "Abstract low poly landscape, geometric, sharp edges, digital art",
  "A futuristic drone delivering a package, sci-fi, city background, realistic",
  "A medieval market square, busy, detailed crowd, historical",
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
