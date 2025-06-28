"use client";

import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col lg:flex-row h-screen relative overflow-hidden">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="lg:w-1/2 flex flex-col justify-center px-10 pt-10"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="text-4xl font-bold mb-4 leading-tight"
          >
            Lorem ipsum dolor sit amet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="text-lg text-gray-700 mb-6"
          >
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis.
            Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque.
            Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
            className="flex items-center mb-4 round"
          >
            <input
              type="email"
              placeholder="example@mail.com"
              className="border border-gray-300 px-4 py-3 rounded-l w-72 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-r font-medium hover:bg-blue-700 transition ml-2"
            >
              Subscribe →
            </motion.button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            className="text-blue-600 font-medium flex items-center gap-2"
          >
            <span className="mb-1">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="10px"
                width="18"
                height="18"
                viewBox="0 0 96 96"
                className="inline-block"
              >
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#007BFF"
                    d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48
                    S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79
                    c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025c1.509,1.446,3.2,2.951,
                    4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101
                    c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,
                    2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489c-2.35-2.042-4.747-4.125-6.701-6.187
                    C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"
                  />
                </g>
              </svg>
            </span>
            No credit required!
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
          className="lg:w-1/2 absolute top-0 right-0 bottom-0 overflow-hidden z-10"
        >
          <div className="relative w-full h-full z-10 clip-slant">
            <Image
              src="/hero_img.png"
              alt="Bike Image"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-100 bg-gradient-to-t from-white via-white/70 to-transparent z-20" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
