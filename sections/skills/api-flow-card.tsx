"use client";
import React, { useRef, forwardRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@iconify-icon/react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:bg-neutral-800 dark:border-neutral-700",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

function APIFlowCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const serverRef = useRef<HTMLDivElement>(null);
  const dbRef = useRef<HTMLDivElement>(null);

  return (
    <Card className="relative overflow-hidden h-full">
      <DotPattern
        className={cn(
          "mask-[radial-gradient(300px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(300px_circle_at_center,rgba(255,255,255,0.3),transparent)]",
        )}
      />
      <CardHeader>
        <CardTitle>API & Data Architecture</CardTitle>
        <CardDescription>
          Designing robust data flows between clients, servers, and databases.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center py-10 min-h-[200px]">
        <div
          ref={containerRef}
          className="relative flex w-full max-w-[300px] items-center justify-between gap-10"
        >
          {/* Client */}
          <Circle ref={userRef}>
            <Icon icon="lucide:user" className="text-blue-500 text-2xl" />
          </Circle>

          {/* Server */}
          <Circle ref={serverRef} className="size-16">
            <Icon
              icon="simple-icons:express"
              className="dark:text-white text-3xl"
            />
          </Circle>

          {/* Database */}
          <Circle ref={dbRef}>
            <Icon
              icon="simple-icons:postgresql"
              className="text-blue-400 text-2xl"
            />
          </Circle>

          {/* Beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={userRef}
            toRef={serverRef}
            duration={3}
            curvature={20}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={serverRef}
            toRef={userRef}
            duration={3}
            curvature={-20}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={serverRef}
            toRef={dbRef}
            duration={3}
            curvature={20}
            gradientStartColor="#9c40ff"
            gradientStopColor="#ffaa40"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={dbRef}
            toRef={serverRef}
            duration={3}
            curvature={-20}
            reverse
            gradientStartColor="#ffaa40"
            gradientStopColor="#9c40ff"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default APIFlowCard;
