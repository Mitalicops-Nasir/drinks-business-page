"use client";

import { mockTailLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

export const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
     
        x: -50,
        y: 50,
      })
      .from("#c-right-leaf", {
 
        x: 50,
        y: 50,
      });
  });
  return (
    <section
      id="cocktails"
      className="h-full overflow-x-hidden overflow-y-hidden pr-[5%] pl-[5%] relative"
    >
      <div className="flex justify-between items-center pt-[150px] relative z-10 max-[769px]:mb-[110px] w-full max-[769px]:flex-col max-[769px]:w-full">
        <div className="mb-[90px] max-[769px]:w-full">
          <h1 className="font-medium text-[20px] mb-3">
            Most Popular Cocktails:
          </h1>
          <div className="flex flex-col gap-[36px]">
            {mockTailLists.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <h1 className="text-[30px] text-[#E7D393] Main-Font font-normal">
                    {item.name}
                  </h1>
                  <p className="text-[16px] font-medium">
                    {item.country} | {item.detail}
                  </p>
                </div>

                <span className="font-medium text-[22px]">— {item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-[769px]:w-full">
          <h1 className="font-medium text-[20px] mb-3">
            Most Popular Cocktails:
          </h1>
          <div className="flex flex-col gap-[36px]">
            {mockTailLists.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <h1 className="text-[30px] text-[#E7D393] Main-Font font-normal">
                    {item.name}
                  </h1>
                  <p className="text-[16px] font-medium">
                    {item.country} | {item.detail}
                  </p>
                </div>

                <span className="font-medium text-[22px]">— {item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src="/images/cocktail-left-leaf.png"
          alt="leaf"
          width={180}
          id="c-left-leaf"
          height={180}
          className="left-leaf absolute bottom-0 right-0 left-0 overflow-hidden max-[1025px]:w-[140px]"
        />
        <Image
          src="/images/cocktail-right-leaf.png"
          alt="leaf"
          width={180}
          id="c-right-leaf"
          height={180}
          className="right-leaf absolute bottom-0 right-0  overflow-hidden max-[1025px]:w-[140px]"
        />
      </div>
    </section>
  );
};
