"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const waitForVideoReady = (video: HTMLVideoElement) => {
    return new Promise<void>((resolve) => {
      if (video.readyState >= 2) {
        resolve();
      } else {
        video.onloadeddata = () => resolve();
      }
    });
  };

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 100 }, 0);

    const video = videoRef.current;
    if (!video) return;

    //const startValue = isMobile ? "top 40%" : "center 60%";
   // const endValue = isMobile ? "400% top" : "bottom -30%";
    const startValue = isMobile ? "top 40%" : "center 60%";
     const endValue = isMobile ? "570% top" : "bottom top";

    const init = async () => {
      await waitForVideoReady(video);
      const duration = video.duration;

      // ✅ Scroll-controlled video frame animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "video",
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true,
           // markers: true, // ✅ super helpful for debugging
          },
        })
        .to(video, {
          currentTime: duration,
          ease: "none",
          onUpdate: () => {
            video.pause();
            video.requestVideoFrameCallback?.(() => {});
          },
        });

      console.log("Video Ready! Duration:", duration);
    };

    init(); // fire the logic

    //console.log("video.duration", videoRef.current.duration);
    //console.log("video.currentTime", videoRef.current.currentTime);
    //Also check if the timeline is firing:
    ScrollTrigger.getAll().forEach((trigger) => console.log(trigger));
  }, []);

  return (
    <>
      <section
        id="hero"
        className="p-[5%] relative z-[10] h-full max-[769px]:h-[140vh]"
      >
        <div className="max-[1025px]:flex max-[1025px]:flex-col hidden relative z-[20]">
          <h1
            className="title text-[330px] Main-Font font-normal text-center
            text-gradient
          max-[1025px]:text-[120px]
         max-[376px]:text-[88px]"
          >
            MOJITO
          </h1>
          <p className="subtitle text-[16px] font-medium text-center">
            Every cocktail on our menu is a blend of premium ingredients,
            creative flair, and timeless recipes — designed to delight your
            senses.{" "}
          </p>
          <a href="/" className="text-[16px] font-semibold mt-3 mx-auto">
            View Cocktails
          </a>
        </div>

        <div className="flex flex-col items-center max-[1025px]:hidden relative z-[20]">
          <h1
            className="title text-[330px] Main-Font font-normal text-center
    text-gradient max-[1025px]:text-[132px]"
          >
            MOJITO
          </h1>

          <div className="flex items-center justify-between h-full w-full">
            <div className="w-[28%]">
              <p className="subtitle text-[16px] font-medium">
                Cool. Crisp. Classic.
              </p>

              <p className="subtitle text-[50px] Main-Font font-normal text-[#E7D393]">
                Sip the Spirit of Summer
              </p>
            </div>

            {/* THIS IS PLACE WHERE THE GLASS NEEDS OT AAPPEAR*/}

            <div className="w-[28%]">
              <p className="subtitle text-[18px] font-medium mb-4">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>

              <a href="/" className="subtitle text-[18px] font-normal">
                View Cocktail
              </a>
            </div>
          </div>
        </div>

        <Image
          src="/images/hero-left-leaf.png"
          alt="leaf"
          width={200}
          height={200}
          className="left-leaf absolute top-[300px] overflow-hidden left-0 max-[1025px]:top-[600px]"
        />

        <Image
          src="/images/hero-right-leaf.png"
          alt="leaf"
          width={180}
          height={180}
          className="right-leaf absolute top-[-50px] overflow-hidden right-[0px] max-[1025px]:top-[300px]"
        />

        <Image
          src="/images/arrow.png"
          alt="arrow"
          width={30}
          height={0}
          className="arrow absolute top-[250px] overflow-hidden right-[50px]"
        />
      </section>

      <div className="video absolute z-10 md:z-[-4]">
        <video
          src="/videos/output.mp4"
          ref={videoRef}
          muted
          className="!w-[99%]"
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
