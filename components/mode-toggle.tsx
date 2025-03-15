"use client";

import React from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-5 right-5">
      <button
        type="button"
        className={cn("px-2 cursor-pointer z-50")}
        aria-label="Toggle theme"
        title={`${theme === "dark" ? "light" : "dark"} mode`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <SunIcon className="hidden size-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200 cursor-pointer" />
        ) : (
          <MoonIcon className="size-[1.2rem] text-foreground cursor-pointer" />
        )}
      </button>
    </div>
  );
};

ModeToggle.displayName = "ModeToggle";
