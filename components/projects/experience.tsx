import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="mx-4 mb-16 mt-16 w-auto rounded-lg bg-dark-100/20 p-4 md:mx-auto md:mt-0 md:w-[600px]">
      <div className="flex justify-between">
        <div className="w-[110px]">
          <motion.h2 className="heading-gradient text-lg font-semibold text-white">
            Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="heading-gradient-underline h-[1px]"
          />
        </div>
        <span className="flex items-center justify-center rounded-lg bg-dark-100 px-2 py-1 pt-1.5 text-xs !leading-none text-gray-300">
          06 Years
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-0">
        <motion.div
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeIn", duration: 0.3, delay: 0.3 }}
          viewport={{ amount: 1, once: true }}
          className="relative flex items-center gap-3 pb-3"
        >
          <div className="absolute inset-y-0 left-2 top-2 z-10 h-full w-[1px] bg-gray-200" />
          <div className="relative z-20 mr-2 flex h-4 w-4 items-center justify-center self-start rounded-full bg-green/30">
            <div className="h-3 w-3 rounded-full bg-green" />
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="font-bold text-gray-100">Kubo SAS</h3>
              <span className="text-xs text-gray-100">Mar 2021 - Apr 2024</span>
            </div>
            <p className="text-sm font-medium text-gray-400">AI Developer</p>
            <p className="text-sm font-medium text-gray-400">
              - Developed advanced chatbots using ChatGPT and other LLMs,
              resulting in a significant increase in user engagement and
              satisfaction.
              <br />- Implemented Retrieval-Augmented Generation (RAG)
              techniques to enhance the accuracy and relevance of AI-generated
              responses.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeIn", duration: 0.3, delay: 0.4 }}
          viewport={{ amount: 1, once: true }}
          className="relative flex items-center gap-3 py-3"
        >
          <div className="absolute inset-y-0 left-2 top-2 z-10 h-full w-[1px] bg-gray-200" />
          <div className="relative z-20 ml-0.5 mr-2 flex h-3 w-3 items-center justify-center self-start rounded-full bg-gray-200"></div>
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="font-bold text-gray-100">Kubo SAS</h3>
              <span className="text-xs text-gray-100">Nov 2018 - Feb 2021</span>
            </div>
            <p className="text-sm font-medium text-gray-400">
              Senior Full-Stack Developer
            </p>
            <p className="text-sm font-medium text-gray-400">
              - Performed debugging and troubleshooting of issues across the
              stack, ensuring smooth and efficient application performance.
              <br />
              - Successfully led the development of ecommerce site, resulting in
              a 20% increase in user engagement and benefit.
              <br />
              - Reduced application load times by 15% through optimization of
              front-end and back-end code.
              <br />- Contributed to the migration of legacy systems to modern
              frameworks, improving maintainability and scalability.
              <br />
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeIn", duration: 0.3, delay: 0.5 }}
          viewport={{ amount: 1, once: true }}
          className="relative flex items-center gap-3 py-3"
        >
          <div className="absolute inset-y-0 left-2 top-2 z-10 h-full w-[1px] bg-gray-200" />
          <div className="relative z-20 ml-0.5 mr-2 flex h-3 w-3 items-center justify-center self-start rounded-full bg-gray-200"></div>
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="font-bold text-gray-100">
                Universidad Santiago de Cali
              </h3>
              <span className="text-xs text-gray-100">Nov 2014 - Sep 2018</span>
            </div>
            <p className="text-sm font-medium text-gray-400">
              Bachelor of Computer Science
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
