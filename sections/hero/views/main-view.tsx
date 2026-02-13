import { Button } from "@/components/ui/button";

import { Ripple } from "@/components/ui/ripple";
import { Download, PhoneCall } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

async function HeroSection() {
  const t = await getTranslations("HERO");
  console.log(t("TITLE"));
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-2 items-center rtl:gap-4">
          <h1 className="z-10 text-center text-4xl font-medium tracking-tighter whitespace-pre-wrap text-neutral-800 dark:text-white md:text-6xl lg:text-7xl">
            {t("TITLE_PART1")}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("TITLE_HIGHLIGHT")}
            </span>
            {t("TITLE_PART2")}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-lg">
            {t("SUBTITLE")}
          </p>
        </div>
        <Ripple className="translate-y-15" />
        <div className="flex flex-row gap-2 z-20">
          <Link
            href="mailto:takie.eldeen1998@gmail.com"
            className="rounded-full px-8! h-12 bg-neutral-900 flex items-center gap-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
          >
            <PhoneCall size={16} />
            {t("CONTACT_ME")}
          </Link>
          {/* <Button className="rounded-full h-12 px-8! dark:bg-neutral-950 text-white border hover:bg-neutral-900 border-neutral-600 dark:text-neutral-400">
            <Download />
            {t("DOWNLOAD_CV")}
          </Button> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
