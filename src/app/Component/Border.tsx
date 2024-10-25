"use client";
import React from "react";
import { Button } from "@/app/Component/ui/moving-border";

export default function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1rem"
        className=" bg-slate-900 py-2 h-auto text-neutral-200 text-[22px] border-none font-sans rounded-xl"
      >
        Explore Courses
      </Button>
    </div>
  );
}
