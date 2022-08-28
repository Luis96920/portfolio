import React from "react";

export default function AboutMe() {
  return (
    <section className="relative top-1/2 m-auto w-max cursor-default -translate-y-2/3 rounded-[30px] bg-dark-100/20 p-16 text-[18px] font-medium leading-[150%] text-gray-100 shadow-lg transition-all duration-300 ease-in hover:bg-dark-100/40">
      <span>/**</span>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * About me
      </p>
      <p>*</p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * I am an open-minded Software Engineer with a{" "}
      </p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * an interest of creating elegant tech solutions.
      </p>
      <p>*</p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * I am an open source enthusiast and enjoy playing video games.
      </p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * I am a self-taught developer and I am always looking for new{" "}
      </p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * challenges to solve.
      </p>
      <p>*</p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * I build awesome products using:
      </p>
      <div className="grid w-max grid-cols-2 gap-1 gap-x-5">
        <p className="transition-all duration-300 ease-in hover:text-white/70">
          * &#x2022; TypeScript
        </p>
        <p className="transition-all duration-300 ease-in hover:text-white/70">
          &#x2022; React
        </p>
        <p className="transition-all duration-300 ease-in hover:text-white/70">
          * &#x2022; Next.js
        </p>
        <p className="transition-all duration-300 ease-in hover:text-white/70">
          &#x2022; TailwindCSS
        </p>
        <p className="transition-all duration-300 ease-in hover:text-white/70">
          * &#x2022; TailwindCSS
        </p>
        <p className="transition-all duration-300 ease-in hover:text-white/70">
          &#x2022; TailwindCSS
        </p>
      </div>
      <p>*</p>
      <span>*/</span>
    </section>
  );
}
