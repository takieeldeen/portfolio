"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { Languages } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export default function Navbar() {
  const t = useTranslations("NAV");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLang = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
  };
  const navItems = [
    { name: t("PROJECTS"), href: "#projects" },
    { name: t("STACK"), href: "#stack" },
    { name: t("SKILLS"), href: "#skills" },
    { name: t("PROCESS"), href: "#process" },
    { name: t("STATS"), href: "#stats" },
    { name: t("CONTACT"), href: "#contact" },
  ];

  return (
    <header className="w-full border-b flex-row flex px-6 md:px-12 fixed top-0 bg-background/80 backdrop-blur-md z-50 h-14 items-center ">
      <div className="flex-1 flex items-center">
        <button
          onClick={toggleLang}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-xs font-bold tracking-wider"
        >
          <Languages size={14} className="text-neutral-500" />
          <span className="text-neutral-700 dark:text-neutral-300 w-4 uppercase">
            {locale}
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
