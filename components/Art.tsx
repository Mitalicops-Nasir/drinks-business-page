"use client";

import { featureLists, goodLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? "top 5%" : "top -10%";
 
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5, //IMP FOR SCROLL CONTROL ANIMATION
        pin: true, //IMP FOR SCROLL CONTROL ANIMATION
      },
    });

    maskTimeline
      .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut ",
      })
      .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  }, []);
  return (
    <section
      id="art"
      className="flex items-center flex-col w-full min-h-dvh pr-[5%] pl-[5%] relative main-background"
    >
      <div className="container mx-auto h-full">
        <h2
          className="will-fade relative md:text-[20vw] text-[85px]
         text-nowrap leading-none Main-Font text-center text-[#505050] mb-20"
        >
          The ART
        </h2>

        <div className="content">
          {isMobile ? (
            <h2 className="will-fade text-4xl md:text-5xl Main-Font text-center text-white">
              Sip-Worthy Perfection
            </h2>
          ) : null}

          <div className="space-y-4 will-fade mb-4">
            {goodLists.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </div>
            ))}
          </div>

          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 masked-img size-full 
              object-contain"
            />
          </div>

          <div className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-2"
              >
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="will-fade text-4xl md:text-5xl Main-Font text-center mb-10 text-white mt-10">
            Sip-Worthy Perfection
          </h2>
          <div
            id="masked-content"
            className="opacity-0 w-full md:px-0 px-5 space-y-5 absolute md:bottom-[-5%] bottom-52 left-1/2 -translate-x-1/2"
          >
            <h3 className="md:text-5xl text-2xl text-center  w-full mx-auto font-serif md:w-full mb-4 text-white">
              Made with Craft, Poured with Passion
            </h3>

            <p className="text-lg text-center w-full mb-10">
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Art;
