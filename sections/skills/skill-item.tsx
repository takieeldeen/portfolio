import { cn } from "@/lib/utils";
import { Icon } from "@iconify-icon/react";

const colorMap = {
  blue: {
    figure: "bg-blue-500/10 border-blue-900",
    icon: "bg-blue-500/30 border-blue-700",
  },
  red: {
    figure: "bg-red-500/10 border-red-900",
    icon: "bg-red-500/30 border-red-700",
  },
  green: {
    figure: "bg-green-500/10 border-green-900",
    icon: "bg-green-500/30 border-green-700",
  },
} as const;

export default function SkillItem({
  color,
  icon,
  title,
  subtitle,
}: {
  color: keyof typeof colorMap;
  icon: string;
  title: string;
  subtitle: string;
}) {
  const figureStyling = colorMap[color].figure;
  const iconStyling = colorMap[color].icon;
  return (
    <figure
      className={cn(
        `w-96 border h-14 rounded-lg flex items-center px-4 gap-3`,
        figureStyling
      )}
    >
      <div
        className={cn(
          `h-10 w-10 rounded-full flex items-center justify-center border`,
          iconStyling
        )}
      >
        <Icon icon={icon} className="text-3xl" />
      </div>
      <div className="flex flex-col gap-0">
        <p className="text-sm leading-4">{title}</p>
        <p className="text-xs dark:text-neutral-400">{subtitle}</p>
      </div>
    </figure>
  );
}
