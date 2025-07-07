import { featureLists } from "@/constants";
import Image from "next/image";
import React from "react";

interface Props {
  topGrid: string;
  bottomGrid: string;
}

const GridCatalogue = ({ topGrid, bottomGrid }: Props) => {
  return (
    <>
      <div
        id={topGrid}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3 auto-rows-[minmax(200px,auto)] mt-8"
      >
        <div className="col-span-2 md:col-span-1 row-span-1 bg-[url('/abt1.png')] text-white rounded-lg p-6 flex items-center justify-center text-2xl font-bold"></div>

        <div className="col-span-2 md:col-span-1 relative main-background  text-white rounded-lg p-6 flex items-center justify-center text-2xl font-bold">
          <div className="flex flex-col gap-2 z-10">
            <h1 className="Main-Font font-normal text-[30px]">
              Crafted to Impress
            </h1>

            <div className="border-1 rounded-full opacity-40 mb-4" />
            {featureLists.map((index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src="/images/check.png"
                  alt="check"
                  width={16}
                  height={16}
                />
                <p className="text-[17px] font-medium">{index}</p>
              </div>
            ))}
          </div>

          <div className="noisy rounded-lg" />
        </div>

        <div className="col-span-2 bg-[url('/abt2.png')] text-white rounded-lg p-6 flex items-center justify-center text-2xl font-bold"></div>
      </div>
      <div
        id={bottomGrid}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[minmax(200px,auto)]"
      >
        <div className="col-span-2 bg-blue-500  bg-[url('/abt3.png')] w-full text-white rounded-lg p-6 flex items-center justify-center text-2xl font-bold"></div>
        <div className="bg-[url('/abt4.png')] w-full text-white rounded-lg p-6 flex items-center justify-center text-2xl font-bold"></div>
      </div>
    </>
  );
};

export default GridCatalogue;
