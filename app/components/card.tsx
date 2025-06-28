"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  delay?: number;
}

export function Card({
  title,
  description,
  imageSrc,
  delay = 0,
}: ProjectCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="overflow-hidden rounded-lg  bg-card shadow-sm transition-all hover:shadow-md"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground text-gray-600">{description}</p>
        <a
          href="#"
          className="mt-4 inline-block text-blue-800 hover:underline font-bold"
        >Learn more</a>

      </div>
    </motion.div>
  );
}
