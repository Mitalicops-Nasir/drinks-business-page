"use client";

import { socials } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });
  return (
    <footer
      id="contact"
      className="p-[5%] relative font-[monasans] main-background"
    >
      <Image
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
        width={270}
        height={270}
        className="absolute right-0 top-0 w-[170px] h-[170px] md:w-[270px] md:h-[270px] hidden md:block"
      />
      <Image
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
        width={270}
        height={270}
        className="absolute left-0 bottom-[-50px] w-[170px] h-[170px] md:w-[270px] md:h-[270px]"
      />

      <h2 className="text-[48px] md:text-[90px] text-white Main-Font text-center">
        Where To Find Us
      </h2>

      <div className="flex flex-col items-center gap-3">
        <h3 className="md:text-[18px] font-medium text-[14px]">VISIT OUR STORE</h3>
        <p className="md:text-[30px] text-[24px]">
          456, Raq Blvd. #404, Los Angeles, CA 90210
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 mt-14">
        <h3 className="md:text-[18px] font-medium text-[14px]">CONTACT US</h3>
        <div className="flex items-center flex-col">
          <p className="md:text-[30px] text-[24px] font-normal">(555) 987-6543</p>
          <p className="md:text-[30px] text-[24px]">hello@jsmcocktail.com</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 mt-15">
        <h3 className="md:text-[18px] font-medium text-[14px]">OPEN EVERY DAY</h3>
        <div className="flex items-center flex-col">
          <p className="md:text-[30px] text-[24px] font-normal">Mon-Thu : 11:00am - 12am</p>
          <p className="md:text-[30px] text-[24px] font-normal">Fri : 11:00am - 2am</p>
          <p className="md:text-[30px] text-[24px] font-normal">Sat : 9:00am - 2am</p>
          <p className="md:text-[30px] text-[24px] font-normal">Sun : 9:00am - 1 am</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 mt-15">
        <h3 className="md:text-[18px] text-[14px] font-medium mb-3">SOCIALS</h3>
        <div className="flex items-center gap-6">
          {socials.map((social, index) => (
            <Link key={index} href={social.url}>
              <Image
                src={social.icon}
                alt={social.name}
                width={32}
                height={32}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
