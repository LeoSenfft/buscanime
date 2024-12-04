"use client";

import useQueryString from "@/hooks/useQueryString";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Filter() {
  const pathname = usePathname();

  const { createQueryString } = useQueryString();

  return (
    <div className="Filter flex flex-wrap justify-center gap-5 text-sm">
      <Link
        className="btn-primary-outline btn-primary-outline--active"
        href={`/${pathname + "?" + createQueryString("type", "")}`}
      >
        All Formats
      </Link>

      <Link
        className="btn-primary-outline"
        href={`/${pathname + "?" + createQueryString("type", "TV Show")}`}
      >
        TV Show
      </Link>
      <Link
        className="btn-primary-outline"
        href={`/${pathname + "?" + createQueryString("type", "Movie")}`}
      >
        Movie
      </Link>
      <Link
        className="btn-primary-outline"
        href={`/${pathname + "?" + createQueryString("type", "TV Short")}`}
      >
        TV Short
      </Link>
      <Link
        className="btn-primary-outline"
        href={`/${pathname + "?" + createQueryString("type", "Special")}`}
      >
        Special
      </Link>
      <Link
        className="btn-primary-outline"
        href={`/${pathname + "?" + createQueryString("type", "OVA")}`}
      >
        OVA
      </Link>
      <Link
        className="btn-primary-outline"
        href={`/${pathname + "?" + createQueryString("type", "ONA")}`}
      >
        ONA
      </Link>
      <Link
        className="btn-primary-outline"
        href={`/${pathname + "?" + createQueryString("type", "Music")}`}
      >
        Music
      </Link>
    </div>
  );
}
