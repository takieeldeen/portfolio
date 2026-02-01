import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
export default function Navbar() {
  return (
    <header className="w-full border-b flex-row flex px-12">
      <NavigationMenu className="mx-auto h-12 max-w-7xl px-6">
        <NavigationMenuList className="flex w-full items-center justify-center">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#skills" className="font-semibold dark:text-gray-300">
                Skills
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <AnimatedThemeToggler className="cursor-pointer" />
    </header>
  );
}
