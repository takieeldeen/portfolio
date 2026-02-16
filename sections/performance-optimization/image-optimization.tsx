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
import { Monitor, Smartphone, Tv } from "lucide-react";

interface DeviceConfig {
  name: string;
  icon: React.ReactNode;
  width: number;
  height: number;
  imageSize: string;
  fileSize: string;
  format: string;
  loadTime: string;
  color: string;
  bgColor: string;
}

const devices: DeviceConfig[] = [
  {
    name: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    width: 375,
    height: 667,
    imageSize: "375×667",
    fileSize: "45 KB",
    format: "WebP",
    loadTime: "0.2s",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Laptop",
    icon: <Monitor className="w-6 h-6" />,
    width: 1920,
    height: 1080,
    imageSize: "1920×1080",
    fileSize: "180 KB",
    format: "WebP",
    loadTime: "0.5s",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "Large Display",
    icon: <Tv className="w-6 h-6" />,
    width: 3840,
    height: 2160,
    imageSize: "3840×2160",
    fileSize: "420 KB",
    format: "WebP",
    loadTime: "1.2s",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10",
  },
];

function ImageOptimization() {
  const [selectedDevice, setSelectedDevice] = useState<DeviceConfig>(
    devices[0],
  );

  return (
    <section className="flex flex-col gap-2 mt-16">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-2xl font-bold">Responsive Image Optimization</h2>
        <p className="text-neutral-300">
          Serving appropriately sized images for different devices is crucial
          for performance. Instead of loading a 4K image on a mobile device, we
          serve optimized versions based on the user&apos;s screen size,
          reducing bandwidth usage and improving load times.
        </p>
      </div>

      {/* Device Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {devices.map((device) => (
          <Card
            key={device.name}
            className={cn(
              "relative cursor-pointer transition-all hover:shadow-lg",
              selectedDevice.name === device.name
                ? "ring-2 ring-primary shadow-md"
                : "opacity-70 hover:opacity-100",
            )}
            onClick={() => setSelectedDevice(device)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div
                  className={cn("p-2 rounded-lg", device.bgColor, device.color)}
                >
                  {device.icon}
                </div>
                <div>
                  <CardTitle className="text-lg">{device.name}</CardTitle>
                  <CardDescription className="text-xs">
                    {device.imageSize}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Selected Device Details */}
      <Card className="relative">
        <DotPattern
          className={cn(
            "mask-[radial-gradient(400px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(400px_circle_at_center,rgba(255,255,255,0.3),transparent)]",
          )}
        />
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div
              className={cn(
                "p-3 rounded-lg",
                selectedDevice.bgColor,
                selectedDevice.color,
              )}
            >
              {selectedDevice.icon}
            </div>
            <div>
              <CardTitle className="text-2xl">
                {selectedDevice.name} Optimization
              </CardTitle>
              <CardDescription>
                Optimized image delivery for {selectedDevice.name.toLowerCase()}{" "}
                devices. (We could also use Next Image Component if available.)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Preview */}
            <div className="flex flex-col gap-4">
              <div className="relative rounded-lg border-2 border-dashed border-border p-8 bg-muted/30 flex items-center justify-center min-h-[300px]">
                <div className="text-center space-y-4">
                  <div
                    className={cn(
                      "inline-flex p-4 rounded-full",
                      selectedDevice.bgColor,
                    )}
                  >
                    {selectedDevice.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">
                      Image Dimensions
                    </p>
                    <p className="text-2xl font-bold">
                      {selectedDevice.imageSize}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full animate-pulse",
                        selectedDevice.bgColor.replace("/10", ""),
                      )}
                    />
                    <p className="text-xs text-muted-foreground">
                      Optimized for this device
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimization Details */}
            <div className="flex flex-col gap-4">
              <div className="space-y-4">
                <div className="rounded-lg border bg-background/80 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-muted-foreground">
                      File Size
                    </span>
                    <span
                      className={cn("text-lg font-bold", selectedDevice.color)}
                    >
                      {selectedDevice.fileSize}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={cn(
                        "h-2 rounded-full transition-all",
                        selectedDevice.bgColor.replace("/10", ""),
                      )}
                      style={{
                        width: `${(parseInt(selectedDevice.fileSize) / 420) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="rounded-lg border bg-background/80 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-muted-foreground">
                      Format
                    </span>
                    <span className="text-lg font-bold">
                      {selectedDevice.format}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Modern format with superior compression
                  </p>
                </div>

                <div className="rounded-lg border bg-background/80 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-muted-foreground">
                      Load Time
                    </span>
                    <span
                      className={cn("text-lg font-bold", selectedDevice.color)}
                    >
                      {selectedDevice.loadTime}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Estimated on 4G connection
                  </p>
                </div>

                <div className="rounded-lg border bg-background/80 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-muted-foreground">
                      Resolution
                    </span>
                    <span className="text-lg font-bold">
                      {selectedDevice.width} × {selectedDevice.height}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Pixel-perfect for this device
                  </p>
                </div>
              </div>

              {/* Optimization Techniques */}
              <div className="rounded-lg border bg-muted/30 p-4 mt-2">
                <p className="text-sm font-semibold mb-3">
                  Applied Optimizations:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs">
                    <span
                      className={cn(
                        "inline-block mt-1 h-1.5 w-1.5 rounded-full",
                        selectedDevice.bgColor.replace("/10", ""),
                      )}
                    />
                    <span className="text-muted-foreground">
                      Responsive srcset for device-specific sizing
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-xs">
                    <span
                      className={cn(
                        "inline-block mt-1 h-1.5 w-1.5 rounded-full",
                        selectedDevice.bgColor.replace("/10", ""),
                      )}
                    />
                    <span className="text-muted-foreground">
                      WebP format with fallback to JPEG
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-xs">
                    <span
                      className={cn(
                        "inline-block mt-1 h-1.5 w-1.5 rounded-full",
                        selectedDevice.bgColor.replace("/10", ""),
                      )}
                    />
                    <span className="text-muted-foreground">
                      Lazy loading for off-screen images
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-xs">
                    <span
                      className={cn(
                        "inline-block mt-1 h-1.5 w-1.5 rounded-full",
                        selectedDevice.bgColor.replace("/10", ""),
                      )}
                    />
                    <span className="text-muted-foreground">
                      CDN delivery for faster global access
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="mt-6 rounded-lg border bg-muted/30 p-4">
            <p className="text-sm font-semibold mb-3">
              Implementation Example:
            </p>
            <pre className="text-xs bg-background/80 rounded p-4 overflow-x-auto">
              <code className="text-muted-foreground font-mono">
                {`<picture>
  <source
    srcSet="/image-mobile.webp 375w,
            /image-laptop.webp 1920w,
            /image-4k.webp 3840w"
    type="image/webp"
  />
  <img
    src="/image-fallback.jpg"
    alt="Optimized image"
    loading="lazy"
  />
</picture>`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default ImageOptimization;
