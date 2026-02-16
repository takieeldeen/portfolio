"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

function DebouncingTechnique() {
  const [typedText, setTypedText] = useState<string>("");
  const finalText = "Hello World";
  const [keystrokeRequests, setKeystrokeRequests] = useState<string[]>([]);
  const [debouncedRequests, setDebouncedRequests] = useState<string[]>([]);

  const debouncedValue = useDebounce(typedText, 500);

  // Track keystroke requests (fired on each change)
  useEffect(() => {
    if (typedText) {
      setKeystrokeRequests((prev) => [
        ...prev,
        `Request: "${typedText}" at ${new Date().toLocaleTimeString()}`,
      ]);
    }
  }, [typedText]);

  // Track debounced requests (fired only after debounce delay)
  useEffect(() => {
    if (debouncedValue) {
      setDebouncedRequests((prev) => [
        ...prev,
        `Request: "${debouncedValue}" at ${new Date().toLocaleTimeString()}`,
      ]);
    }
  }, [debouncedValue]);

  // Gradually fill text character by character
  useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;
    const interval = setInterval(() => {
      if (currentIndex <= finalText.length) {
        setTypedText(finalText.slice(0, currentIndex));
        currentIndex++;
      } else {
        timeout = setTimeout(() => {
          setTypedText("");
          setKeystrokeRequests([]);
          setDebouncedRequests([]);
          currentIndex = 0;
        }, 5000);
      }
    }, 300);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className=" text-2xl font-bold">Debouncing Techniques</h2>
        <p className="text-neutral-300">
          Debouncing Techinque is usually used to delay the execution of a
          function after a certain amount of time has passed since the last
          execution. In our current example it is used to delay the execution of
          a function after a certain amount of time has passed since the last
          keystroke. This can reduce the cost of a search feature in a specific
          scenario.
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <Card className="relative flex-1">
          <DotPattern
            className={cn(
              "mask-[radial-gradient(300px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(300px_circle_at_center,rgba(255,255,255,0.3),transparent)]",
            )}
          />
          <CardHeader>
            <CardTitle>Before Debouncing</CardTitle>
            <CardDescription>
              A request is sent to the API with each keystroke.
            </CardDescription>
            <CardContent className="flex flex-col gap-4 py-6">
              <div className="flex items-center justify-center">
                <p className="font-mono text-lg">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              <div className="max-h-48 overflow-y-auto rounded-md border bg-muted/30 p-4">
                <p className="mb-3 text-sm font-semibold flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                  Requests fired on each keystroke:
                </p>
                {keystrokeRequests.length === 0 ? (
                  <p className="text-sm text-muted-foreground italic">
                    No requests yet...
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {keystrokeRequests.map((request, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 rounded-md bg-background/80 p-2 border border-border/50 hover:border-border transition-colors"
                      >
                        <span className="inline-flex items-center justify-center min-w-[20px] h-5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-[10px] font-semibold mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-xs text-foreground/80 leading-5 font-mono">
                          {request}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="relative flex-1">
          <DotPattern
            className={cn(
              "mask-[radial-gradient(300px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(300px_circle_at_center,rgba(255,255,255,0.3),transparent)]",
            )}
          />
          <CardHeader>
            <CardTitle>After Debouncing</CardTitle>
            <CardDescription>
              A request is sent to the API only after the user has stopped
              typing.
            </CardDescription>
            <CardContent className="flex flex-col gap-4 py-6">
              <div className="flex items-center justify-center">
                <p className="font-mono text-lg">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              <div className="max-h-48 overflow-y-auto rounded-md border bg-muted/30 p-4">
                <p className="mb-3 text-sm font-semibold flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  Requests sent after debouncing:
                </p>
                {debouncedRequests.length === 0 ? (
                  <p className="text-sm text-muted-foreground italic">
                    No requests yet...
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {debouncedRequests.map((request, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 rounded-md bg-background/80 p-2 border border-border/50 hover:border-border transition-colors"
                      >
                        <span className="inline-flex items-center justify-center min-w-[20px] h-5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-semibold mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-xs text-foreground/80 leading-5 font-mono">
                          {request}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}

export default DebouncingTechnique;
