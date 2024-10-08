import Image from "next/image";
import React from "react";

import LinkedIn from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

export default function BottomBar() {
  return (
    <footer className="fixed inset-x-[5vw] bottom-[5vh] hidden h-[55px] items-center justify-between rounded-b-[5px] border-[1px] border-t-[1px] border-gray-200 bg-dark-300 px-8 sm:hidden pl-2 text-gray-100 md:flex  md:pl-8">
      <div className="flex h-full items-center">
        <span className="pr-2">Contact me anytime</span>
        <a
          // href="https://www.linkedin.com/in/luis saavedra/"
          target="_blank"
          rel="noreferrer"
          className="flex h-full items-center justify-center border-x-[1px] border-x-gray-200 px-4"
        >
          <Image
            src={LinkedIn}
            height="30"
            width="30"
            alt="LinkedIn"
            className="cursor-pointer"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </a>
      </div>

      <a
        href="https://github.com/Luis96920"
        target="_blank"
        rel="noreferrer"
        className="flex h-full cursor-pointer items-center gap-2 border-x-[1px] border-x-gray-200 px-4"
      >
        <span className="cursor-pointer">@luis saavedra</span>
        <Image
          src={Github}
          height="30"
          width="30"
          alt="Github"
          className="cursor-pointer"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </a>
    </footer>
  );
}
