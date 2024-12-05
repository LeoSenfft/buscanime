import React from "react";
import Logo from "@/components/svgs/Logo";
import Link from "next/link";
import { ThemeButton } from "./ThemeButton";

export default function Header() {
  return (
    <header className="Header bg-primary py-5 text-white">
      <div className="container-full relative flex justify-between gap-2 sm:block">
        <Link href={"/"}>
          <Logo className="sm:mx-auto max-w-full" />
        </Link>

        <ThemeButton className="sm:absolute sm:right-6 sm:top-[50%] sm:translate-y-[-50%]" />
      </div>
    </header>
  );
}
