"use client";
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { BACKEND_URL } from "../config";

export default function Home() {
  const { getToken } = useAuth();
  const [showIcon, setShowIcon] = useState(false);
  const [prompt, setPrompt] = useState("");
  const starterPrompts = [
    "Start a blog with Astro",
    "Create a docsite with VitePress",
    "Build a SaaS with Nuxt",
    "Create a landing page with Tailwind CSS",
    "Build a portfolio with Next.js",
    "Create a blog with Gatsby",
  ];
  const techStackIcons = [
    {
      name: "Astro",
      icon: "/icons8-astro-js.svg",
    },
    {
      name: "VitePress",
      icon: "/icons8-vite.svg",
    },
    {
      name: "Nuxt",
      icon: "/icons8-vue-js.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "/icons8-tailwindcss.svg",
    },
    {
      name: "Next.js",
      icon: "/icons8-nextjs.svg",
    },
    {
      name: "React",
      icon: "/icons8-react-native.svg",
    },
  ];

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    setShowIcon(e.target.value.length > 0);
  };

  const handleSubmit = async () => {
    const token = await getToken();
    const response = await axios.post(
      `${BACKEND_URL}/project`,
      {
        prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  };

  return (
    <main className="h-full">
      <Navbar />

      <div className="container mx-auto px-2 pt-40 pb-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            What do you want to build?
          </h1>
          <p className="text-gray-400 text-lg" style={{ lineHeight: "0" }}>
            Prompt, run, edit, and deploy full-stack{" "}
            <span className="text-white">web</span> and{" "}
            <span className="text-white">mobile</span> apps.
          </p>

          <div className="flex justify-center relative">
            <Textarea
              placeholder="How can Bolt help you today?"
              className="bg-gray-900/50 border-gray-800 text-white w-[70%] placeholder:text-gray-500  min-h-[140px] rounded-xl p-6 resize-none"
              onChange={handlePromptChange}
            />
            {showIcon && (
              <Button
                size="icon"
                className="bg-blue-600 hover:bg-blue-700 text-white absolute right-[17%] top-6"
                onClick={handleSubmit}
              >
                <MoveRight />
              </Button>
            )}
          </div>
          <div className="flex justify-center flex-wrap gap-2">
            {starterPrompts.map((prompt) => (
              <Button
                key={prompt}
                size="sm"
                variant="outline"
                className="rounded-full text-white bg-gray-900/50 border-gray-800 font-normal hover:bg-gray-900/70 hover:text-white"
              >
                {prompt}
              </Button>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            Or start a blank app with your favorite stack
          </p>
          <div className="flex justify-center flex-wrap gap-3">
            {techStackIcons.map((icon) => (
              <Button
                key={icon.name}
                size="icon"
                className="rounded-full bg-gray-900/50"
              >
                <img src={icon.icon} alt={icon.name} />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
