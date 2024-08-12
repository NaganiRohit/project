"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-manu";
import { cn } from "@/app/utils/utils";
import Link from "next/link";
import Image from "next/image";
 


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    
    <div className={cn("academy fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
       <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={null} item="Home"></MenuItem>
        </Link>
       

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-2xl">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem> 

      
        
        
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-2xl">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem></Menu> 
    </div>
    
  )
}

export default Navbar
