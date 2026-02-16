"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

// Simulated API call
const fetchUserData = async (
  userId: number,
): Promise<{ id: number; name: string; email: string }> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`,
  };
};

// Simple cache implementation
const cache = new Map<number, { id: number; name: string; email: string }>();

function Caching() {
  const [withoutCacheRequests, setWithoutCacheRequests] = useState<string[]>(
    [],
  );
  const [withCacheRequests, setWithCacheRequests] = useState<string[]>([]);
  const [isLoadingWithoutCache, setIsLoadingWithoutCache] = useState(false);
  const [isLoadingWithCache, setIsLoadingWithCache] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(1);

  // Fetch without cache
  const fetchWithoutCache = async () => {
    setIsLoadingWithoutCache(true);
    const startTime = performance.now();

    try {
      await fetchUserData(currentUserId);
      const endTime = performance.now();
      const duration = (endTime - startTime).toFixed(0);

      setWithoutCacheRequests((prev) => [
        ...prev,
        `User ${currentUserId} fetched in ${duration}ms at ${new Date().toLocaleTimeString()}`,
      ]);
    } finally {
      setIsLoadingWithoutCache(false);
    }
  };

  // Fetch with cache
  const fetchWithCache = async () => {
    setIsLoadingWithCache(true);
    const startTime = performance.now();

    try {
      let data;
      let fromCache = false;

      if (cache.has(currentUserId)) {
        // Get from cache
        data = cache.get(currentUserId);
        fromCache = true;
      } else {
        // Fetch from API and cache it
        data = await fetchUserData(currentUserId);
        cache.set(currentUserId, data);
      }

      const endTime = performance.now();
      const duration = (endTime - startTime).toFixed(0);

      setWithCacheRequests((prev) => [
        ...prev,
        `User ${currentUserId} ${fromCache ? "(cached)" : "(fetched)"} in ${duration}ms at ${new Date().toLocaleTimeString()}`,
      ]);
    } finally {
      setIsLoadingWithCache(false);
    }
  };

  const clearLogs = () => {
    setWithoutCacheRequests([]);
    setWithCacheRequests([]);
  };

  const clearCache = () => {
    cache.clear();
    setWithCacheRequests([]);
  };

  return (
    <section className="flex flex-col gap-2 mt-16">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-2xl font-bold">Caching Techniques</h2>
        <p className="text-neutral-300">
          Caching is a technique used to store frequently accessed data in a
          temporary storage location for faster retrieval. Instead of fetching
          the same data repeatedly from the server, we store it locally and
          reuse it, significantly reducing load times and server requests.
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-4 p-4 rounded-lg border bg-muted/30">
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold">User ID:</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((id) => (
              <Button
                key={id}
                variant={currentUserId === id ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentUserId(id)}
                className="w-10 h-10"
              >
                {id}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex gap-2 ml-auto">
          <Button variant="outline" size="sm" onClick={clearLogs}>
            Clear Logs
          </Button>
          <Button variant="outline" size="sm" onClick={clearCache}>
            Clear Cache
          </Button>
        </div>
      </div>

      <div className="flex flex-row gap-2">
        {/* Without Cache Card */}
        <Card className="relative flex-1">
          <DotPattern
            className={cn(
              "mask-[radial-gradient(300px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(300px_circle_at_center,rgba(255,255,255,0.3),transparent)]",
            )}
          />
          <CardHeader>
            <CardTitle>Without Caching</CardTitle>
            <CardDescription>
              Every request fetches data from the server, even for the same
              user.
            </CardDescription>
            <CardContent className="flex flex-col gap-4 py-6">
              <div className="flex items-center justify-center">
                <Button
                  onClick={fetchWithoutCache}
                  disabled={isLoadingWithoutCache}
                  className="w-full"
                >
                  {isLoadingWithoutCache
                    ? "Fetching..."
                    : `Fetch User ${currentUserId}`}
                </Button>
              </div>
              <div className="max-h-64 overflow-y-auto rounded-md border bg-muted/30 p-4">
                <p className="mb-3 text-sm font-semibold flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                  API Requests (No Cache):
                </p>
                {withoutCacheRequests.length === 0 ? (
                  <p className="text-sm text-muted-foreground italic">
                    No requests yet...
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {withoutCacheRequests.map((request, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 rounded-md bg-background/80 p-2 border border-border/50 hover:border-border transition-colors"
                      >
                        <span className="inline-flex items-center justify-center min-w-[20px] h-5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-semibold mt-0.5">
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

        {/* With Cache Card */}
        <Card className="relative flex-1">
          <DotPattern
            className={cn(
              "mask-[radial-gradient(300px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(300px_circle_at_center,rgba(255,255,255,0.3),transparent)]",
            )}
          />
          <CardHeader>
            <CardTitle>With Caching</CardTitle>
            <CardDescription>
              First request fetches from server, subsequent requests use cached
              data.
            </CardDescription>
            <CardContent className="flex flex-col gap-4 py-6">
              <div className="flex items-center justify-center">
                <Button
                  onClick={fetchWithCache}
                  disabled={isLoadingWithCache}
                  className="w-full"
                >
                  {isLoadingWithCache
                    ? "Fetching..."
                    : `Fetch User ${currentUserId}`}
                </Button>
              </div>
              <div className="max-h-64 overflow-y-auto rounded-md border bg-muted/30 p-4">
                <p className="mb-3 text-sm font-semibold flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                  API Requests (With Cache):
                </p>
                {withCacheRequests.length === 0 ? (
                  <p className="text-sm text-muted-foreground italic">
                    No requests yet...
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {withCacheRequests.map((request, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 rounded-md bg-background/80 p-2 border border-border/50 hover:border-border transition-colors"
                      >
                        <span className="inline-flex items-center justify-center min-w-[20px] h-5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-semibold mt-0.5">
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

export default Caching;
