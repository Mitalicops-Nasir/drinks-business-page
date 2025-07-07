"use client";

import Image from "next/image";
import React from "react";
import GridCatalogue from "./UI/GridCatalogue";
import { profileLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const BestCocktails = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });


    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        "#top-grid div, #bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });
  return (
    <section id="about" className="bg-[#000000] p-[5%] pb-30 relative z-[10] w-full">
      <div className="flex-col md:flex md:flex-row justify-between items-center">
        <div className="w-full md:w-[40%] mb-6">
          <p
            className="pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#FFFFFF] text-black text-[14px] 
          font-medium mb-4 rounded-[50px] w-fit"
          >
            Best Cocktails
          </p>

          <h2 className=" text-[48px] md:text-[64px] Main-Font font-normal">
            Where every detail matters—from muddle to garnish
          </h2>
        </div>

        <div id="right-text" className="w-full md:w-[40%]">
          <p className="text-[18px] font-medium line-clamp-[30px] mb-5">
            Every cocktail we serve is a reflection of our obsession with detail
            — from the first muddle to the final garnish. That care is what
            turns a simple drink into something truly memorable.
          </p>

          <div className="flex items-center gap-4">
            <div>
              <span className="text-[#EFEFEF] font-[700] text-[24px]">
                4.5/5
              </span>

              <p className="font-medium text-[14px] mt-2">
                More than +12000 customers
              </p>
            </div>

            <div className="relative p-0.5 w-[80px] rotate-90 main-background ">
              <div className="noisy rounded-full" />
            </div>

            <div className="relative flex rounded-[60px] main-background p-4">
              {profileLists.map((item, index) => (
                <Image
                  key={index}
                  src={item.imgPath}
                  alt="profile"
                  width={44}
                  height={44}
                  className="z-[10]"
                />
              ))}

              <div className="noisy rounded-[60px]" />
            </div>
          </div>
        </div>
      </div>

      <GridCatalogue topGrid="top-grid" bottomGrid="bottom-grid" />
    </section>
  );
};

export default BestCocktails;
