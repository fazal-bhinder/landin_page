// components/section_7.tsx
"use client";

import {ChevronLeft,ChevronRight, } from "lucide-react";
import SlidingCard from "../components/slidingCard";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cards } from "../utils/cards";

export default function Section_6() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  

  return (
    <motion.section
      id="section_7"
      className="bg-[#0050D8] text-white py-20 px-6 md:px-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 md:mb-0">
            <p className="text-white font-semibold text-sm mb-2">
              Join other Sun harvesters
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-white mb-4">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="text-white/90 max-w-2xl text-sm">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi
              tristique condimentum congue fusce nunc, donec magnis commodo.
            </p>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded font-semibold shadow hover:opacity-90 transition">
            Lorem Ipsum
          </button>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <SlidingCard
                  {...card}
                  icon={card.icon ? <card.icon {...(card.iconProps || {})} /> : null}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 justify-start mt-10">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0050D8] transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0050D8] transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
