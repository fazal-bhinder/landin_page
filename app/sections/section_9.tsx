"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Curabitur pretium purus sed imperdiet gravida?",
    answer:
      "Curabitur pretium, purus sed imperdiet gravida, mauris risus ornare est, sed convallis ligula lacus non justo.",
  },
  {
    question: "Sed ut perspiciatis unde omnis iste natus error?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    question: "Nemo enim ipsam voluptatem quia voluptas?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
  },
  {
    question: "Ut enim ad minima veniam quis nostrum?",
    answer:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
];

export default function Section_9() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full mx-auto px-6 py-16 bg-gray-100">
      <motion.h2
        className="text-3xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </motion.h2>

      <div className="divide-y">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="cursor-pointer py-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-black">{faq.question}</h3>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-black" />
              ) : (
                <Plus className="w-5 h-5 text-black" />
              )}
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3 text-gray-600"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
