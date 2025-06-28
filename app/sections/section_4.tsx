"use client";

import { Card } from "../components/card";
import { motion } from "framer-motion";
import Image from "next/image";

const Section_4 = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const  },
    },
  };

  return (
    <div className="px-6">
      <div className="mt-20">
        <p className="text-md font-semibold text-blue-500 leading-tight pb-2">
          Lorem ipsum dolor sit amet
        </p>
        <h1 className="text-2xl font-bold mb-2">LOREM IPSUM DOLOR SIT</h1>
        <p className="text-md font-medium max-w-3xl text-gray-800">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus
          lectus.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20 max-w-4xl mx-auto px-4">
        <Card
          title="Lorem ipsum dolor sit amet consectetur."
          description="Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate."
          imageSrc="/buildings.png"
        />
        <Card
          title="Lorem ipsum dolor sit amet consectetur."
          description="Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate."
          imageSrc="/buddha.png"
        />
        <Card
          title="Lorem ipsum dolor sit amet consectetur."
          description="Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate."
          imageSrc="/girl.png"
        />
        <Card
          title="Lorem ipsum dolor sit amet consectetur."
          description="Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate."
          imageSrc="/orange.png"
        />
      </div>

      <div className="relative w-screen h-screen mt-36 overflow-hidden left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/comp.png"
            alt="Full Page Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-10 left-10 z-20"
        >
          <button className="bg-white px-6 py-3 font-extrabold text-lg text-black shadow-md">
            LOGO
          </button>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold leading-tight max-w-4xl"
            variants={fadeInUp}
          >
            DOLOR SIT AMET CONSECTETUR.
            <br />
            QUIS ADIPISCING PURUS EGESTAS ALIQUAM MI. DOLOR SIT AMET
            CONSECTETUR. QUIS <br />
            ADIPISCING
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Section_4;
