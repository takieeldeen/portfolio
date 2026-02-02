/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

function PerformanceCard() {
  const [value, setValue] = useState(70);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 70;
      }
      return prev + 2;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Card className="relative">
      <DotPattern
        className={cn(
          "mask-[radial-gradient(300px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(300px_circle_at_center,rgba(255,255,255,0.3),transparent)]"
        )}
      />
      <CardHeader>
        <CardTitle>Performance Optimization</CardTitle>
        <CardDescription>
          Optimizing UI Performance for better User Experience
        </CardDescription>
        <CardContent className="flex items-center justify-center py-12">
          <AnimatedCircularProgressBar
            value={value}
            gaugePrimaryColor="oklch(52.7% 0.154 150.069)"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
          />
        </CardContent>
      </CardHeader>
    </Card>
  );
}

export default PerformanceCard;
