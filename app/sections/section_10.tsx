'use client';

import { motion } from 'framer-motion';

export default function Section_10() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center m-30 p-4">
        <div className="text-black font-extrabold text-xl sm:text-2xl bg-gray-300 px-4 py-2 mb-4">
          LOGO
        </div>
        <h1 className="text-center text-lg sm:text-4xl font-semibold">
          LOREM IPSUM DOLOR SIT AMET<br /> CONSECTETUR DUI.
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus <br /> vitae
          porttitor pharetra tempor quis arcu. Ipsum nullam..
        </p>
        <button
          type="submit"
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
        >
          Lorem Ipsum →
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full bg-[#1E222A] text-white py-12 px-6 sm:px-12"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          <div>
            <div className="text-black font-extrabold text-xl bg-gray-300 px-4 py-2 w-fit mb-4">
              LOGO
            </div>
          </div>

          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">Lorem Ipsum</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                {index !== 3 && <li>Lorem Ipsum</li>}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
