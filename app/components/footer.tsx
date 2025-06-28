"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {

    const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-gray-50 py-14 mt-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-40">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-medium mb-2">Lorem Ipsum</p>
          <h2 className="text-2xl font-bold leading-tight mb-4">
            Lorem Ipsum Dolor <br />
            Sit Amet
          </h2>
          <p className="text-gray-700 mb-6 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus dui
            pellentesque. Pellentesque ultricies ipsum.
          </p>

           <motion.div
            className="flex-1 flex"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            <div className="flex justify-center md:justify-start gap-4">
              <motion.div variants={itemVariants}>
                <Image
                  src="/google_play.png"
                  alt="Google Play"
                  width={150}
                  height={50}
                  className="cursor-pointer"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Image
                  src="/apple_store.png"
                  alt="App Store"
                  width={150}
                  height={50}
                  className="cursor-pointer"
                />
              </motion.div>
            </div>
          </motion.div>
          
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/hand.png"
            alt="Phone in hand"
            width={800}
            height={800}
            className="object-contain max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
