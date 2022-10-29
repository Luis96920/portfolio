import Image from "next/image";
import React from "react";
import { scrollIntoId } from "../common/navbar";

export default function FirstScreen() {
  return (
    <section
      id="_hello"
      className="relative flex h-auto flex-col items-center justify-start gap-32 pb-16 pt-16 md:h-full md:flex-row md:justify-center md:pb-0 md:pt-0 "
    >
      <div className="flex w-[90%] flex-col gap-16 md:w-auto">
        <div>
          <p className="text-[18px] font-medium text-white">Hi. I am</p>
          <h1
            id="title"
            className="title text-[48px] tracking-tight text-white md:text-[62px]"
          >
            Liplan Lekipising
          </h1>
          <h2 className="text-[23px] font-medium tracking-tight text-purple-heavy md:text-[32px]">
            &gt; Front-end developer
          </h2>
        </div>
        <div className="flex flex-col gap-2 italic text-gray-100 md:gap-1">
          <p>
            I craft interactive and beautiful web apps, and I love what I do.
          </p>
          <p>
            With every line of code, I strive to make the web a better place.{" "}
          </p>
          <br />
          <button
            onClick={() => scrollIntoId("_projects")}
            className="mx-auto mt-4 w-max cursor-pointer rounded-[8px] bg-purple-light py-2 px-8 font-semibold not-italic leading-[120.4%] tracking-tight text-white hover:bg-purple-light/80"
          >
            View projects
          </button>
        </div>
      </div>
      <div className="relative z-50 hidden h-[25vw] w-[25vw] rounded-full md:block">
        <Image
          src={
            "https://res.cloudinary.com/dpnbddror/image/upload/v1642927649/liplan/liplan_img_ftb9xn.webp"
          }
          height="300"
          width="300"
          layout="responsive"
          alt="Liplan Lekipising - Portfolio"
          className="rounded-full"
        />
      </div>
      {/* background blur */}
      <div className="bg-blur-one absolute top-[10vh] right-[20vw] z-40 h-[20vw] w-[20vw]" />
    </section>
  );
}
