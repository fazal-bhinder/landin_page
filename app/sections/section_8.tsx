"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageCardCarousel from "../components/imageCard";

export default function Section_8() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-white mt-30">
        <div className="w-full md:w-2/3 bg-gray-200 mt-15 pt-10 pl-25">
          <motion.div
            className="max-w-3xl mx-auto min-h-[500px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-extrabold text-blue-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. <br /> DIGNISSIM TELLUS.
            </motion.h2>

            <motion.p
              className="text-gray-700 mb-8 w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
              laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
              ultricies feugiat mauris.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="submit"
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            >
              Lorem Ipsum →
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="md:w-1/3 bg-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/scooty.png"
            alt="Bikers on road"
            width={500}
            height={500}
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradient */}
        <div className="w-full h-4 bg-gradient-to-r from-blue-800 via-green-600 to-purple-900"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute -bottom-20 left-10 z-10 bg-white p-6 w-[90%] md:w-[600px] shadow-lg rounded"
        >
          <div className="flex justify-end mb-2">
            <Image
              src="/pin.png"
              alt="Pin Icon"
              width={30}
              height={30}
            />
          </div>

          <h1 className="font-bold text-xl mb-2">Lorem ipsum dolor sit</h1>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-52 mb-10 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold text-center">LOREM IPSUM DOLOR SIT AMET</h1>
        <p className="text-center mt-4 max-w-5xl mx-auto text-gray-700">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est 
          nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>
      </motion.div>

      <motion.div
        className="p-6 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ImageCardCarousel />
      </motion.div>
    </div>
  );
}
