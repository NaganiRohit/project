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

      
      </BackgroundGradient>
    </div>
  );
}
