"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";

export default function Section_2() {
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
    <div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="px-10 mt-25"
    >
      <div className="ml-10 bg-white overflow-hidden flex flex-col lg:flex-row gap-8">
        <motion.div
          className="lg:w-1/2 flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={textVariants} className="text-blue-600 font-semibold">
            Lorem ipsum dolor sit amet
          </motion.p>

          <motion.h1 variants={textVariants} className="text-4xl font-bold mb-2 leading-tight">
            Lorem ipsum dolor sit amet consectetur. Eu elit
          </motion.h1>

          <motion.p variants={textVariants} className="font-medium w-170">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus.
          </motion.p>

          <motion.div variants={containerVariants} className="flex flex-col gap-4 pt-4">
            <motion.div variants={textVariants} className="flex items-start gap-4">
              <div className="relative rounded overflow-hidden">
                <Image src="/road.png" alt="bike 1" width={30} height={30} className="object-cover" />
              </div>
              <p className="font-black text-lg">
                Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
              </p>
            </motion.div>
            <p className="ml-10 text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra.
              Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum.
              Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
            </p>


            <motion.div variants={textVariants} className="flex items-start gap-4">
              <div className="relative rounded overflow-hidden">
                <Image src="/road.png" alt="bike 2" width={30} height={30} className="object-cover" />
              </div>
              <p className="font-black text-lg">
                Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
              </p>
            </motion.div>
            <p className="ml-10 text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra.
              Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum.
              Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
            </p>


            <motion.div variants={textVariants} className="flex items-start gap-4">
              <div className="relative rounded overflow-hidden">
                <Image src="/road.png" alt="bike 3" width={30} height={30} className="object-cover" />
              </div>
              <p className="font-black text-lg">
                Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
              </p>
            </motion.div>
            <p className="ml-10 text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra.
              Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum.
              Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:w-1/2 flex justify-end"
        >
          <Image
            src="/guys.png"
            alt="Bikes Side"
            width={600}
            height={600}
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
    <div className="h-4 ml-15 mt-10 bg-gradient-to-r from-blue-800 via-green-600 to-purple-900"></div>
    </div>
  );
}
