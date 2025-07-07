"use client";

import { sliderLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Menu = () => {
  //const contentRef = useRef();
  const [Index, setindex] = useState(0);

  const handleIndex = (index: number) => {
    setindex(index);

    if (index >= sliderLists.length) {
      setindex(0);
    }

    if (index < 0) {
      setindex(3);
    }
  };

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details h1",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
  }, [Index]);
  return (
    <div
      id="menu"
      className="flex items-center flex-col min-h-dvh p-[5%] relative gap-20 main-background"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-10 z-10">
        {sliderLists.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleIndex(index)}
            className="relative group cursor-pointer"
          >
            <p
              className={`text-gray-500 hover:text-white duration-200 Main-Font text-[20px] md:text-[32px] font-normal ${
                index === Index && "!text-white"
              }`}
            >
              {item.name}
            </p>
            <div
              className={`after:absolute after:content-[''] after:duration-200 after:p-[0.7px] after:bg-gray-500 
               after:w-full
              group-hover:after:bg-white
              after:rounded-full ${index === Index && "after:bg-white"}`}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between z-10">
        {sliderLists.slice(Index, Index + 1).map((item, index) => (
          <div
            key={item.id}
            className="cocktail flex items-center flex-col md:flex-row md:items-end gap-6"
          >
            <div
              //ref={contentRef}
              className="details w-full order-2 md:order-none md:w-1/3"
            >
              <p className="text-white text-[16px] mb-4">Recipes For:</p>
              <h1 className="text-[#E7D393] text-[29px] md:text-[50px]">
                {item.name}
              </h1>
            </div>
            <Image
              src={item.image}
              alt={item.name}
              className=" order-1 md:order-none w-[300px] h-full md:w-[500px] md:h-[500px]"
              width={500}
              height={500}
            />
            <div className="details w-full order-3 md:order-none md:w-1/3">
              {" "}
              <h1 className="font-serif text-[36px] md:text-[42px]  font-normal">
                {item.title}
              </h1>
              <p className="text-[#EFEFEF] text-[16px] md:text-[18px] font-medium mt-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-1/2 left-[40px] right-0 z-10">
        {sliderLists.slice(Index - 1, Index).map((item, index) => (
          <h1
            key={item.id}
            className="hidden md:block text-[32px] font-medium Main-Font"
          >
            {item.name}
          </h1>
        ))}

        <Image
          src="/images/right-arrow.png"
          alt="right arrow"
          width={38}
          height={38}
          onClick={() => handleIndex(Index - 1)}
          className="cursor-pointer"
        />
      </div>

      <div className="absolute bottom-1/2 right-[20px] z-10">
        {sliderLists.slice(Index + 1, Index + 2).map((item, index) => (
          <h1
            key={item.id}
            className="hidden md:block text-[32px] font-medium Main-Font"
          >
            {item.name}
          </h1>
        ))}

        <Image
          src="/images/left-arrow.png"
          alt="right arrow"
          width={38}
          onClick={() => handleIndex(Index + 1)}
          height={38}
          className="cursor-pointer"
        />
      </div>

      <Image
        src="/images/slider-left-leaf.png"
        alt="leaf"
        width={180}
        id="c-left-leaf"
        height={180}
        className="left-leaf absolute bottom-0 left-0 w-[140px] h-[140px] md:w-[180px] md:h-[180px]"
      />
      <Image
        src="/images/slider-right-leaf.png"
        alt="leaf"
        width={180}
        id="c-right-leaf"
        height={180}
        className="right-leaf absolute top-0 right-0 w-[140px] h-[140px] md:w-[180px] md:h-[180px]"
      />
    </div>
  );
};

export default Menu;
