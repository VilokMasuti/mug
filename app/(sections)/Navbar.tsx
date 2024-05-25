'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col text-white space-y-4 text-sm">
               <HoveredLink href="/courses">Home</HoveredLink>
           
               </div>
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active} item="Projects"
            >
               <div className="flex flex-col text-white space-y-4 text-sm">
               <HoveredLink href="/courses">Projects</HoveredLink>
           
               </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact ">
            <div className="flex flex-col text-white space-y-4 text-sm">
               <HoveredLink href="/courses" >Contact</HoveredLink>
           
               </div>
            
            </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar