"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";

export default function Section_1() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.6, 0.05, -0.01, 0.9),
      },
    },
  };

  const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: cubicBezier(0.6, 0.05, -0.01, 1),
    },
  },
};

  return (
    <div className="px-10">
      <div className="ml-10 bg-white shadow-2xl overflow-hidden p-6 flex flex-col lg:flex-row gap-8 ">
        <motion.div
          className="lg:w-1/2 flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={textVariants} className="text-blue-600 font-semibold mb-2">
            Lorem ipsum dolor sit
          </motion.p>

          <motion.h1 variants={textVariants} className="text-3xl font-bold mb-4 leading-tight">
            LOREM IPSUM  DOLOR SIT AMET
          </motion.h1>

          <motion.p variants={textVariants} className="font-medium w-120">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
            Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at
            felis aliquet. Hendrerit tellus at purus lectus.
          </motion.p>

          <motion.div variants={containerVariants} className="flex flex-col gap-6 pt-4">
            <motion.div variants={textVariants} className="flex items-start gap-4">
              <div className="w-20 h-20 relative rounded overflow-hidden">
                <Image src="/blog_img1.png" alt="bike 1" fill className="object-cover" />
              </div>
              <p className="font-medium w-100">
                Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
              </p>
            </motion.div>

            <motion.div variants={textVariants} className="flex items-start gap-4">
              <div className="w-20 h-20 relative rounded overflow-hidden">
                <Image src="/blog_img2.png" alt="bike 2" fill className="object-cover" />
              </div>
              <p className="font-medium w-100">
                Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna
                ullamcorper id dui cursus. Venenatis.
              </p>
            </motion.div>

            <motion.div variants={textVariants} className="flex items-start gap-4">
              <div className="w-20 h-20 relative rounded overflow-hidden">
                <Image src="/blog_img3.png" alt="bike 3" fill className="object-cover" />
              </div>
              <p className="font-medium w-100">
                Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={textVariants} className="flex items-center gap-6 pt-10">
            <button className="bg-blue-800 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
              Lorem Ipsum →
            </button>
            <span className="text-blue-800 font-semibold flex items-center gap-2">

                    <Image src="/telephone.png" alt="Bikes Side" width={30} height={10} className="object-cover" />
                
                123456789
            </span>
          </motion.div>
           
        </motion.div>
        
        <motion.div 
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-start gap-4"
        >
         <Image src="/bikes.png" alt="Bikes Side" width={600} height={100} className="object-cover" />   
        </motion.div>
      </div>
     <div className="h-4 ml-10  bg-gradient-to-r from-blue-800 via-green-600 to-purple-900"></div>
    </div>
  );
}
