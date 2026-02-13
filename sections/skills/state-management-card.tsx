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
} from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";
import { Lock, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const allStates = ["LOADING", "LOADED", "UNAUTHORIZED", "EMPTY"];

function StateManagementCard() {
  const t = useTranslations("SKILLS");
  const [state, setState] = useState<
    "LOADING" | "LOADED" | "EMPTY" | "UNAUTHORIZED"
  >("UNAUTHORIZED");
  const [, setValue] = useState(70);
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
    <Card className="relative row-span-2">
      {/* <DotPattern
        className={cn(
          "mask-[radial-gradient(300px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(300px_circle_at_center,rgba(255,255,255,0.3),transparent)]"
        )}
      /> */}
      <CardHeader>
        <CardTitle>{t("STATE_TITLE")}</CardTitle>
        <CardDescription>{t("STATE_DESC")}</CardDescription>
      </CardHeader>
      <CardContent className=" py-12 h-full justify-center flex flex-col gap-3">
        {state === "LOADED" && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0.8, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-3"
            >
              {[1, 2, 3].map((el) => (
                <DataItem key={el} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
        {state === "LOADING" && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0.8, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-3"
            >
              {[1, 2, 3].map((el) => (
                <DataItemSkeleton key={el} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {state === "EMPTY" && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0.8, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-3"
            >
              <EmptyData />
            </motion.div>
          </AnimatePresence>
        )}
        {state === "UNAUTHORIZED" && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0.8, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-3"
            >
              <UnauthorizedDataCard />
            </motion.div>
          </AnimatePresence>
        )}
      </CardContent>
    </Card>
  );
}

function DataItem() {
  const t = useTranslations("SKILLS");
  return (
    <Item
      variant="default"
      className="bg-neutral-900 py-3 dark:border-neutral-800 z-2 w-full"
    >
      <ItemContent className="gap-0">
        <ItemTitle>{t("STATE_ITEM_TITLE")}</ItemTitle>
        <ItemDescription>{t("STATE_ITEM_DESC")}</ItemDescription>
      </ItemContent>
    </Item>
  );
}
function DataItemSkeleton() {
  return (
    <Item
      variant="default"
      className="bg-neutral-900 py-5 dark:border-neutral-800 z-2 w-full"
    >
      <ItemContent className="gap-2">
        <Skeleton className="w-18 h-3" />
        <Skeleton className="w-full h-3" />
      </ItemContent>
    </Item>
  );
}

function EmptyData() {
  const t = useTranslations("SKILLS");
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <User />
        </EmptyMedia>
        <EmptyTitle>{t("STATE_EMPTY_TITLE")}</EmptyTitle>
        <EmptyDescription>{t("STATE_EMPTY_DESC")}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          {t("STATE_EMPTY_BUTTON")}
        </Button>
      </EmptyContent>
    </Empty>
  );
}

function UnauthorizedDataCard() {
  const t = useTranslations("SKILLS");
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="h-16 w-16">
          <Lock size={48} />
        </EmptyMedia>
        <EmptyTitle className="leading-5">{t("STATE_UNAUTH_TITLE")}</EmptyTitle>
        <EmptyDescription>{t("STATE_UNAUTH_DESC")}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

export default StateManagementCard;
