import { Button } from "@/components/ui/button";

import { Ripple } from "@/components/ui/ripple";
import { Download, PhoneCall } from "lucide-react";

function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-2">
          <h1 className="z-10 text-center text-5xl font-medium tracking-tighter whitespace-pre-wrap text-neutral-800 dark:text-white">
            Frontend Web Developer
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Building scalable, production-ready systems with React, Next.js, and
            TypeScript.
          </p>
        </div>
        <Ripple className="translate-y-15" />
        <div className="flex flex-row gap-2 z-20">
          <Button className="rounded-full px-8! h-12">
            <PhoneCall />
            Contact Me
          </Button>
          <Button className="rounded-full h-12 px-8! bg-neutral-950 border hover:bg-neutral-900 border-neutral-600 text-neutral-400">
            <Download />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
