"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type TabName = "Research" | "Plan" | "Design";

const tabs: TabName[] = ["Research", "Plan", "Design"];

export default function Section_7() {
  const [activeTab, setActiveTab] = useState<TabName>("Research");

  const tabContent: Record<TabName, string> = {
    Research:
      "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.",
    Plan:
      "Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan. Suspendisse et arcu amet viverra. Magna sem aenean id quisque feugiat porttitor. Nunc, in metus, enim, ipsum morbi euismod pellentesque.",
    Design:
      "Suspendisse et arcu amet viverra. Magna sem aenean id quisque feugiat porttitor. Nunc, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id.",
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white">
      <motion.div
        className="w-full md:w-1/2 max-w-xl mb-12 md:mb-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
          LOREM IPSUM DOLOR SIT AMET
        </h1>

        <div className="flex border rounded overflow-hidden text-center text-sm font-semibold mb-6 w-full max-w-md">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 transition ${
                activeTab === tab
                  ? "bg-gray-200 text-[#0F172A]"
                  : "bg-white text-gray-600 hover:bg-white hover:text-[#0F172A] hover:shadow"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.p
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 text-sm leading-relaxed mb-6"
        >
          {tabContent[activeTab]}
        </motion.p>

        <motion.a
          href="#"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-[#1D4ED8] font-semibold text-sm flex items-center gap-2 hover:underline"
        >
          Check tools <ArrowRight size={16} />
        </motion.a>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Image
          src="/handshake.png"
          alt="Handshake"
          width={500}
          height={350}
          className="object-cover max-w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
