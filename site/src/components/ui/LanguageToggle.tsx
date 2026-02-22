"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // パスからロケールを置換
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 bg-bg-card rounded-full p-1">
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "px-3 py-1 rounded-full text-sm font-medium transition-all",
          locale === "en"
            ? "bg-accent-blue text-white"
            : "text-text-secondary hover:text-text-primary"
        )}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("ja")}
        className={cn(
          "px-3 py-1 rounded-full text-sm font-medium transition-all",
          locale === "ja"
            ? "bg-accent-blue text-white"
            : "text-text-secondary hover:text-text-primary"
        )}
      >
        JP
      </button>
    </div>
  );
}
