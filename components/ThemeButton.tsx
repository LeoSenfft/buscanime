"use client";

import { useThemeContext } from "@/hooks/useThemeContext";
import React, { useEffect, useState, type ButtonHTMLAttributes } from "react";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

export function ThemeButton({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleClick() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  function getIcon() {
    if (!mounted || theme === "light") {
      return <FiSun />;
    }

    return <FiMoon />;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      {...props}
      className={`${twMerge(" bg-white  text-black p-2 rounded-full", props.className)}`}
    >
      {getIcon()}
    </button>
  );
}
