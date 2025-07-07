import BestCocktails from "@/components/About";
import Art from "@/components/Art";
import { Cocktails } from "@/components/Cocktails";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { noSSR } from "next/dynamic";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <>
      <div className="bg-black relative z-10">
        <div className="noisy" />
        <Navbar />
        <Hero />
        <Cocktails />
      </div>
      <div className="w-full h-dvh">
        <BestCocktails />
        <Art />
        <Menu />
        <Contact />
      </div>
    </>
  );
}
