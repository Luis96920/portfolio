import Image from "next/image";
import React, { useEffect, useRef } from "react";
import useIntersect from "../../utils/useIntersectionObserver";
import mainimage from "../../assets/me-1.png";
export default function FirstScreen({
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
    <section
      id="_hello"
      ref={observeRef}
      className="relative flex h-auto flex-col items-center justify-start gap-32 pb-16 pt-16 md:h-full md:flex-row md:justify-center md:pb-0 md:pt-0 "
    >
      <div className="flex w-[90%] flex-col gap-16 md:w-auto">
        <div>
          <p className="text-[18px] font-medium text-white">Hi. I am</p>
          <h1
            id="title"
            className="title text-[48px] tracking-tighter text-white md:text-[62px]"
          >
            Luis Saavedra
          </h1>
          <p className="text-[23px] font-medium tracking-tight text-green md:text-[32px]">
            &gt; AI & Fullstack developer
          </p>
        </div>
        <div className="flex flex-col gap-2 italic text-gray-100 md:gap-1">
          <p>Are you ready to see some AI wizardry?</p>
          <p>Scroll down and let me take you on a tour of my craft!</p>
        </div>
      </div>
      <div className="pic-shadow relative z-50 hidden h-[20vw] w-[20vw] overflow-hidden rounded-full outline outline-green md:block">
        <Image
          src={mainimage}
          height="200"
          width="200"
          quality={100}
          priority={true}
          alt="Luis Saavedra - Portfolio"
          className="rounded-full bg-left object-left transition-all duration-300 ease-in hover:scale-[1.025]"
          sizes="100vw"
          style={{
            width: "auto",
            height: "auto",

          }}
        />
      </div>
      {/* background blur */}
      <div className="bg-blur-one absolute right-[20vw] top-[10vh] z-40 h-[20vw] w-[20vw]" />
    </section>
  );
}
