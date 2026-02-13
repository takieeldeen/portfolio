"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Icon } from "@iconify-icon/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/animate-ui/components/animate/tooltip";
import { DotPattern } from "@/components/ui/dot-pattern";

import { useTranslations } from "next-intl";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function TechStack() {
  const t = useTranslations("TECH");
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
      <div
        className="relative flex h-[600px] md:h-[500px] pb-24 md:pb-36 w-full items-center justify-center overflow-hidden flex-1"
        ref={containerRef}
      >
        <DotPattern
          className={cn(
            "mask-[radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
        <div className="flex size-full max-h-[400px] max-w-lg flex-col items-stretch justify-between gap-10 px-4">
          <div className="flex flex-row items-center justify-between">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="z-1">
                  <Circle
                    ref={div10Ref}
                    className="dark:bg-neutral-800 border-2 border-neutral-600 bg-neutral-100"
                  >
                    <Icon
                      icon="simple-icons:express"
                      className="dark:text-white text-3xl"
                    />
                  </Circle>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Express.js</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="z-1">
                  <Circle
                    ref={div9Ref}
                    className="dark:bg-neutral-800 border-2 border-neutral-600 bg-neutral-100"
                  >
                    <Icon
                      icon="teenyicons:nextjs-outline"
                      className="dark:text-white text-3xl"
                    />
                  </Circle>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Next.js</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="z-1">
                  <Circle
                    ref={div1Ref}
                    className="dark:bg-neutral-800 border-2 border-neutral-600 bg-neutral-100"
                  >
                    <Icon
                      icon="mdi:nodejs"
                      className="text-green-500 text-4xl"
                    />
                  </Circle>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Node.js</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="z-1">
                  <Circle
                    ref={div5Ref}
                    className="dark:bg-neutral-800 border-2 border-neutral-600 bg-neutral-100"
                  >
                    <Icon icon="uil:react" className="text-blue-500 text-4xl" />
                  </Circle>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>React</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="z-1">
                  <Circle
                    ref={div2Ref}
                    className="dark:bg-neutral-800 border-2 border-neutral-600 bg-neutral-100"
                  >
                    <Icon
                      icon="lineicons:mongodb"
                      className="text-green-500 text-4xl"
                    />
                  </Circle>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>MongoDB</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="z-1">
                  <Circle
                    ref={div4Ref}
                    className="size-16 dark:bg-neutral-800 border-2 border-neutral-600 bg-neutral-100 "
                  >
                    <Icon
                      icon="line-md:github"
                      className="dark:text-neutral-100 text-4xl"
                    />
                  </Circle>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub Actions</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="z-1">
                  <Circle
                    ref={div6Ref}
                    className="dark:bg-neutral-800 border-2 border-neutral-600 bg-neutral-100"
                  >
                    <Icon
                      icon="simple-icons:react"
                      className="text-blue-400 text-3xl"
                    />
                  </Circle>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>React Native</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="z-1">
                  <Circle
                    ref={div3Ref}
                    className="dark:bg-neutral-800 border-2 border-neutral-600 bg-neutral-100"
                  >
                    <Icon
                      icon="simple-icons:postgresql"
                      className="text-blue-500 text-3xl"
                    />
                  </Circle>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>PostgreSQL</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="z-1">
                  <Circle
                    ref={div7Ref}
                    className="dark:bg-neutral-800 border-2 border-neutral-600 bg-neutral-100"
                  >
                    <Icon
                      icon="proicons:typescript"
                      className="text-blue-500 text-3xl"
                    />
                  </Circle>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>TypeScript</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex flex-row items-center justify-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="z-1">
                  <Circle
                    ref={div8Ref}
                    className="dark:bg-neutral-800 border-2 border-neutral-600 bg-neutral-100"
                  >
                    <Icon
                      icon="hugeicons:shadcn-square"
                      className="dark:text-white text-3xl"
                    />
                  </Circle>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Shadcn UI</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div10Ref}
          toRef={div4Ref}
          curvature={-145}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-85}
          endYOffset={-5}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={3}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div8Ref}
          toRef={div4Ref}
          curvature={125}
          endYOffset={0}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div9Ref}
          toRef={div4Ref}
          curvature={-175}
          endYOffset={-15}
          reverse
          className="z-0"
        />
      </div>
      <div className="flex-1 px-6 md:px-0">
        <div className="flex flex-col gap-2 text-center md:text-left rtl:md:text-right">
          <h3 className="text-xl font-semibold dark:text-neutral-100 rtl:text-2xl rtl:font-bold">
            {t("SUBTITLE_H3")}
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 rtl:text-lg max-w-xl mx-auto md:mx-0">
            {t("SUBTITLE_P")}
          </p>
        </div>
      </div>
    </div>
  );
}
