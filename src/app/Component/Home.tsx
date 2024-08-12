import React from "react";
import { cn } from "@/app/utils/utils";
import { Spotlight } from "@/app/Component/ui/HomeSec";
import TypeEfect from "@/app/Component/Discription"
import Button from "@/app/Component/Border"
import Link from "next/link";

export default function SpotlightPreview() {
  return (
<>


<div className="h-[40rem] w-full rounded-md flex md:items-center  md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pt-36 
       ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 ">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50  ">
         Saamaveda Music Academy  
        </h1>
     <TypeEfect/>

        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto ">
        Learn Carnatic music online or offline with Saamaveda Music Academy, a 21-year-old institution with 15 branches in India. <br/>Choose from vocal, violin, keyboard, flute, veena, sitar, mridangam, tabla and morecourses
        </p>

      


      </div>

    </div>

<Link href='/Courses'>

<div className="items-center flex justify-center  ">
      <Button/>  </div>
      </Link>

</>

  
  );
}
