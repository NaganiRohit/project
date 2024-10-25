"use client";
import React from "react";
import { Button } from "@/app/Component/ui/moving-border";

export default function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="2rem"
        className=" bg-slate-900 p-2  text-neutral-200 text-[22px] border-none font-sans"
      >
        Explore Courses
      </Button>
    </div>
  );
}
