"use client";

import useQueryString from "@/hooks/useQueryString";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Filter() {
  const pathname = usePathname();

  const { createQueryString } = useQueryString();

  return (
    <div className="Filter flex content-center">
      <Link href={`/${pathname + "?" + createQueryString("type", "")}`}>All Formats</Link>
      <Link href={`/${pathname + "?" + createQueryString("type", "TV Show")}`}>TV Show</Link>
      <Link href={`/${pathname + "?" + createQueryString("type", "Movie")}`}>Movie</Link>
      <Link href={`/${pathname + "?" + createQueryString("type", "TV Short")}`}>TV Short</Link>
      <Link href={`/${pathname + "?" + createQueryString("type", "Special")}`}>Special</Link>
      <Link href={`/${pathname + "?" + createQueryString("type", "OVA")}`}>OVA</Link>
      <Link href={`/${pathname + "?" + createQueryString("type", "ONA")}`}>ONA</Link>
      <Link href={`/${pathname + "?" + createQueryString("type", "Music")}`}>Music</Link>
    </div>
  );
}
