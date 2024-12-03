import React from "react";
import Logo from "@/components/svgs/Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="Header bg-primary py-5">
      <div className="container-full">
        <Link href={"/"}>
          <Logo className="mx-auto max-w-full" />
        </Link>
      </div>
    </header>
  );
}
