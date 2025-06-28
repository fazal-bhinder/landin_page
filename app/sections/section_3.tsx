"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logosRow1 = ["/brands/hero.png", "/brands/honda.png", "/brands/bajaj.png", "/brands/tvs.png"];
const logosRow2 = ["/brands/royal_enfield.png", "/brands/yamaha.png", "/brands/ktm.png", "/brands/ather.png"];
const logosRow3 = ["/brands/ola_electric.png", "/brands/revolt.png", "/brands/ultraviolette.png", "/brands/tork.png"];

export const createSlideInVariant = (direction: "left" | "right" | "up" | "down") => ({
  hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
});

const LogoRow = ({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right" | "up" | "down";
}) => (
  <div className="flex flex-wrap justify-center gap-1 md:gap-16 my-8 ">
    {images.map((src, i) => (
      <motion.div
        key={src + i}
        className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center mx-[90px] "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={createSlideInVariant(direction)}
      >
        <Image
          src={src}
          alt={`brand-${i}`}
          width={100}
          height={100}
          className="object-contain w-full h-full"
        />
      </motion.div>
    ))}
  </div>
);

export default function Section_3() {
  return (
    <div className="mt-24">
      <div className="relative w-full h-screen">
        <Image
          src="/download.png"
          alt="Section 4 Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Floating Button */}
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

        {/* Centered Text */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold leading-tight max-w-5xl"
            variants={createSlideInVariant("left")}
          >
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl text-lg md:text-xl text-gray-300"
            variants={createSlideInVariant("right")}
          >
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat
            vestibulum nisi at ac risus amet. Mi accumsan sagittis justo
            pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna
            arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
          </motion.p>

          <motion.p
            className="mt-4 max-w-3xl text-lg md:text-xl text-gray-300"
            variants={createSlideInVariant("left")}
          >
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
            condimentum ultrices non. Ornare semper in tincidunt pellentesque
            cras mauris in vitae. At viverra quis eu malesuada vel et porttitor.
            Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a
            pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </motion.p>
        </motion.div>
      </div>

      <div className="bg-white mt-20">
        <div className="text-center mb-10 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-2xl md:text-4xl font-extrabold text-black"
              variants={createSlideInVariant("up")}
            >
              LOREM IPSUM DOLOR SIT AMET <br className="hidden md:block" />
              CONSECTETUR. COMMODO LEO AMET.
            </motion.p>
          </motion.div>
        </div>
      </div>

        <LogoRow images={logosRow1} direction="left" />
        <LogoRow images={logosRow2} direction="right" />
        <LogoRow images={logosRow3} direction="left" />
      </div>
  );
}
