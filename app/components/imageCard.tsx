// components/ImageCardCarousel.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Story = {
  imageSrc: string;
  title: string;
  description: string;
  ctaText?: string;
};

const stories: Story[] = [
  {
    imageSrc: "/mountain_bike.png",
    title: "Artist & Investor",
    description:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    ctaText: "Read Full Story",
  },
  {
    imageSrc: "/hero_img.png",
    title: "Explorer & Adventurer",
    description:
      "Auctor porta a, varius diam sit. Tellus porttitor ut sollicitudin sit non fringilla. Pulvinar a ac amet, blandit nisi sed vel.",
    ctaText: "Discover More",
  },
  {
    imageSrc: "/bike_road.png",
    title: "Photographer & Dreamer",
    description:
      "Curabitur libero, sit tincidunt sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero.",
    ctaText: "See the Journey",
  },
];

export default function ImageCardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  return (
    <div className="flex flex-col items-center gap-6 w-full px-4 py-10 md:px-10">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-6xl w-full">
        <div className="md:w-1/2 h-[320px] md:h-[480px] relative">
          <Image
            src={activeStory.imageSrc}
            alt={activeStory.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {activeStory.title}
          </h3>
          <p className="text-gray-600 mb-6">{activeStory.description}</p>
          <button className="text-blue-600 font-semibold flex items-center gap-2 hover:underline">
            {activeStory.ctaText || "Read More"} <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        {stories.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === activeIndex
                ? "bg-blue-600 w-4"
                : "bg-blue-300 w-2 hover:bg-blue-400"
            }`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show story ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
