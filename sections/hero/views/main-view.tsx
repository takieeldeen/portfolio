import { Button } from "@/components/ui/button";

import { Ripple } from "@/components/ui/ripple";
import { Download, PhoneCall } from "lucide-react";
import { getTranslations } from "next-intl/server";

async function HeroSection() {
  const t = await getTranslations("HERO");
  console.log(t("TITLE"));
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-2">
          <h1 className="z-10 text-center text-5xl font-medium tracking-tighter whitespace-pre-wrap text-neutral-800 dark:text-white">
            {t("TITLE")}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">{t("SUBTITLE")}</p>
        </div>
        <Ripple className="translate-y-15" />
        <div className="flex flex-row gap-2 z-20">
          <Button className="rounded-full px-8! h-12">
            <PhoneCall />
            {t("CONTACT_ME")}
          </Button>
          <Button className="rounded-full h-12 px-8! dark:bg-neutral-950 text-white border hover:bg-neutral-900 border-neutral-600 dark:text-neutral-400">
            <Download />
            {t("DOWNLOAD_CV")}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
