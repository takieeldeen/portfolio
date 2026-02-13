/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
  ItemMedia,
} from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";
import { Lock, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const allStates = ["LOADING", "LOADED", "UNAUTHORIZED", "EMPTY"];

function StateManagementCard() {
  const t = useTranslations("SKILLS");
  const [state, setState] = useState<
    "LOADING" | "LOADED" | "EMPTY" | "UNAUTHORIZED"
  >("UNAUTHORIZED");
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev): any => {
        const currentIndex = allStates.indexOf(prev);
        if (currentIndex === allStates.length - 1) {
          return allStates[0];
        }
        return allStates[currentIndex + 1];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Card className="relative row-span-2 overflow-hidden">
      <DotPattern
        className={cn(
          "mask-[radial-gradient(300px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(300px_circle_at_center,rgba(255,255,255,0.3),transparent)]",
        )}
      />
      <CardHeader className="relative z-10 pb-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
            <div className="size-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Global Store
            </span>
          </div>
          <motion.div
            key={state}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn(
              "text-[10px] font-bold uppercase px-2 py-1 rounded-md border",
              state === "LOADED" &&
                "bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-600",
              state === "LOADING" &&
                "bg-yellow-100 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-600",
              state === "EMPTY" &&
                "bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-600",
              state === "UNAUTHORIZED" &&
                "bg-red-100 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600",
            )}
          >
            {state}
          </motion.div>
        </div>
        <CardTitle className="text-xl">{t("STATE_TITLE")}</CardTitle>
        <CardDescription className="text-xs line-clamp-1">
          {t("STATE_DESC")}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 py-8 h-full min-h-[300px] justify-center flex flex-col gap-3">
        <AnimatePresence mode="wait">
          {state === "LOADED" && (
            <motion.div
              key="loaded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-3"
            >
              <DataItem
                name="Alex Rivers"
                role="Lead Developer"
                color="bg-blue-500"
              />
              <DataItem
                name="Sarah Chen"
                role="UI Designer"
                color="bg-purple-500"
              />
              <DataItem
                name="James Wilson"
                role="Fullstack"
                color="bg-orange-500"
              />
            </motion.div>
          )}

          {state === "LOADING" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-3"
            >
              {[1, 2, 3].map((el) => (
                <DataItemSkeleton key={el} />
              ))}
            </motion.div>
          )}

          {state === "EMPTY" && (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex flex-col gap-3"
            >
              <EmptyData />
            </motion.div>
          )}

          {state === "UNAUTHORIZED" && (
            <motion.div
              key="unauthorized"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex flex-col gap-3"
            >
              <UnauthorizedDataCard />
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

function DataItem({
  name,
  role,
  color,
}: {
  name: string;
  role: string;
  color: string;
}) {
  return (
    <Item
      variant="default"
      className="bg-neutral-200 dark:bg-neutral-900 py-3 z-2 w-full border border-neutral-400 dark:border-neutral-800 shadow-sm"
    >
      <ItemMedia
        className={cn(
          "size-8 rounded-full text-white text-[10px] font-bold",
          color,
        )}
      >
        {name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </ItemMedia>
      <ItemContent className="gap-0">
        <ItemTitle className="text-neutral-950 dark:text-neutral-50 text-xs">
          {name}
        </ItemTitle>
        <ItemDescription className="text-neutral-500 dark:text-neutral-400 text-[10px]">
          {role}
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}

function DataItemSkeleton() {
  return (
    <Item
      variant="default"
      className="bg-neutral-200 dark:bg-neutral-900 py-3 z-2 w-full border border-neutral-400 dark:border-neutral-800 opacity-50"
    >
      <Skeleton className="size-8 rounded-full bg-neutral-200 dark:bg-neutral-800" />
      <ItemContent className="gap-2">
        <Skeleton className="w-16 h-2 bg-neutral-200 dark:bg-neutral-800" />
        <Skeleton className="w-full h-2 bg-neutral-200 dark:bg-neutral-800" />
      </ItemContent>
    </Item>
  );
}

function EmptyData() {
  const t = useTranslations("SKILLS");
  return (
    <Empty className="border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900/50">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-white dark:bg-neutral-800">
          <User />
        </EmptyMedia>
        <EmptyTitle>{t("STATE_EMPTY_TITLE")}</EmptyTitle>
        <EmptyDescription>{t("STATE_EMPTY_DESC")}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button
          variant="outline"
          size="sm"
          className="bg-white dark:bg-neutral-800"
        >
          {t("STATE_EMPTY_BUTTON")}
        </Button>
      </EmptyContent>
    </Empty>
  );
}

function UnauthorizedDataCard() {
  const t = useTranslations("SKILLS");
  return (
    <Empty className="border border-dashed border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10">
      <EmptyHeader>
        <EmptyMedia
          variant="icon"
          className="h-12 w-12 bg-red-100 dark:bg-red-900/30 text-red-600"
        >
          <Lock size={24} />
        </EmptyMedia>
        <EmptyTitle className="leading-5 text-red-700 dark:text-red-400">
          {t("STATE_UNAUTH_TITLE")}
        </EmptyTitle>
        <EmptyDescription className="text-red-600/80 dark:text-red-400/60">
          {t("STATE_UNAUTH_DESC")}
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

export default StateManagementCard;
