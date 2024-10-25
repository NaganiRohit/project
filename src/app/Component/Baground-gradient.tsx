"use client";
import React from "react";
import { BackgroundGradient } from "@/app/Component/ui/background-gradient";
import Image from "next/image";

export default function BackgroundGradientDemo() {
  return (
    <div className="mx-1 px-4">
      <BackgroundGradient className="rounded-[22px] h-52 max-w-sm p-4 sm:p-10 overflow-hidden bg-white dark:bg-zinc-900">
        {/* <Image
          src={`/jordans.webp`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        /> */}
        <p className="text-base sm:text-2xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>

        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-[0.5rem] font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.3rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
