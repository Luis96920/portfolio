import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import useIntersect from "../../utils/useIntersectionObserver";
export default function AboutMe({
  setIsVisible,
}: {
  setIsVisible: () => void;
}) {
  // Call the useIntersect hook and receive the setNode and entry variables
  const { entry, setNode } = useIntersect({
    root: null, // The element used as the viewport for checking visibility, null means the browser viewport
    rootMargin: "0px", // Margin around the root element (in pixels)
    threshold: 0.5, // A threshold value between 0 and 1, indicating the percentage of the target element that should be visible before the callback is invoked
  });

  const observeRef = useRef(null);

  useEffect(() => {
    setNode(observeRef.current);
  }, []);

  useEffect(() => {
    if (!!entry?.isIntersecting) {
      setIsVisible();
    }
  }, [entry?.isIntersecting]);

  return (
    <motion.section
      id="_about-me"
      ref={observeRef}
      className="relative mt-8 max-w-full cursor-default  bg-dark-100/20 p-6 px-8 text-[13px] font-medium leading-[150%] text-gray-100 shadow-lg transition-all duration-300 ease-in hover:bg-dark-100/40 md:relative md:m-auto md:mb-32 md:mt-0 md:w-[800px] md:rounded-[30px] md:p-16 md:text-[16px]"
    >
      <div className="absolute -top-12 left-1/2 w-[315px] -translate-x-1/2">
        <motion.h2 className="heading-gradient text-center text-lg font-semibold text-white">
          About Me
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="heading-gradient-underline h-[1px]"
        />
      </div>
      <br />
      <div className="text-wrap">
        I am a dedicated and innovative AI and Full Stack Developer with
        extensive experience in developing cutting-edge AI solutions and
        building robust, scalable web applications.
        <br />
        My expertise spans across a diverse range of technologies, including
        large language models (LLMs), Langchain, LLaMa, chatbots, ChatGPT,
        Retrieval-Augmented Generation (RAG), React.js, Next.js, and the MERN
        stack. <br />
        And that is not all, as a professional who believes in providing the best
        quality service, I can guarantee you error-free work as well as
        unlimited revisions to ensure your utmost satisfaction. <br />
        Please contact me. I will not disappoint you.
      </div>

      <br />
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        My major skill:
      </p>
      <div className="grid w-full grid-cols-2 gap-1 gap-x-5 pl-4 md:grid-cols-3">
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          LLM
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Prompt
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Lang chain
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Chatbot
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          ChatGPT
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Pine cone
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Generative AI
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          RAG
        </p>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <span className="text-xs">Others:</span>
        <p className="flex flex-wrap gap-1 text-xs text-gray-100">
          <span className="text-yellow">Python</span>
          &#x2022;
          <span className="text-yellow">Git</span>
          &#x2022;
          <span className="text-yellow">React.js</span>
          &#x2022;
          <span className="text-yellow">Next.js</span>
          &#x2022;
          <span className="text-yellow">Node.js</span>
          &#x2022;
          <span className="text-yellow">MongoDB</span>
          &#x2022;
          <span className="text-yellow">MySQL</span>
          &#x2022;
          <span className="text-yellow">VectorDB</span>
        </p>
      </div>
    </motion.section>
  );
}
