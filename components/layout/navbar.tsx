"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { Languages } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [lang, setLang] = useState("EN");

  const toggleLang = () => {
    setLang((prev) => (prev === "EN" ? "AR" : "EN"));
  };
  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Skills", href: "#skills" },
    { name: "Process", href: "#process" },
    { name: "Stats", href: "#stats" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full border-b flex-row flex px-6 md:px-12 fixed top-0 bg-background/80 backdrop-blur-md z-50 h-14 items-center ">
      <div className="flex-1 flex items-center">
        <button
          onClick={toggleLang}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-xs font-bold tracking-wider"
        >
          <Languages size={14} className="text-neutral-500" />
          <span className="text-neutral-700 dark:text-neutral-300 w-4">
            {lang}
          </span>
        </button>
      </div>
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className="text-sm font-medium dark:text-gray-300 hover:text-blue-500 transition-colors"
                >
                  {item.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex-1 flex items-center justify-end">
        <AnimatedThemeToggler className="cursor-pointer" />
      </div>
    </header>
  );
}
