"use client";

import Footer from "../components/footer";
import Form from "../components/form";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Section_5() {
  return (
    <div className="py-16">
      <Form />
      <Footer />

      <div className="relative mt-20 h-[800px] w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <Image
            src="/bike_gallery.png"
            alt="background"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-20 left-10 z-10 text-black"
        >
          <p className="text-gray-400 font-bold pb-3">NO LIMITS</p>
          <h1 className="text-5xl font-bold mb-2 pb-3">
            LOREM IPSUM DOLOR <br /> SIT AMET
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus
            <br /> vitae porttitor pharetra tempor quis arcu. Ipsum
            <br /> nullam.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-4 rounded"
          >
            Lorem Ipsum →
          </motion.button>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row bg-white mt-30">
        {/* Left Image */}
        <motion.div
          className="md:w-1/3 bg-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/bike_road.png"
            alt="Bikers on road"
            width={500}
            height={500}
            className="object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 bg-gray-200 mt-15 pt-10 pl-25">
          <motion.div
            className="max-w-3xl mx-auto min-h-[500px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 text-sm font-semibold mb-2">Lorem ipsum</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              <span className="text-blue-700">LOREM</span> IPSUM DOLOR SIT <br />
              AMET CONSECTETUR. ENIM <br />
              DONEC.
            </h2>
            <p className="text-gray-700 mb-8">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
            </p>

            {/* Grid of Links */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {Array(6)
                .fill("Lorem Ipsum")
                .map((item, idx) => (
                  <p key={idx} className="font-semibold text-gray-800">
                    {item}
                  </p>
                ))}
            </div>

            {/* Button */}
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
      </div>

      <div className="h-4 bg-gradient-to-r from-blue-800 via-green-600 to-purple-900"></div>
    </div>
  );
}
