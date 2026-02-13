"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { Menu, X, Languages } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("NAV");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

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
    <>
      <header className="w-full border-b flex px-6 md:px-12 fixed top-0 bg-background/80 backdrop-blur-md z-50 h-14 items-center justify-between">
        <div className="flex items-center gap-4">
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

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-8">
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

        <div className="flex items-center gap-2">
          <AnimatedThemeToggler className="cursor-pointer" />
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-14 bg-background z-40 md:hidden flex flex-col p-6 gap-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold border-b pb-4 dark:border-neutral-800 hover:text-blue-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
