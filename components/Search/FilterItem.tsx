import useGetAllSearchParams from "@/hooks/useGetAllSearchParams";
import useQueryString from "@/hooks/useQueryString";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface FilterItemProps {
  title: string;
  defaultChecked?: boolean;
}

export function FilterItem({ title, defaultChecked }: FilterItemProps) {
  const pathname = usePathname();
  const { allParams } = useGetAllSearchParams();

  const { createQueryString } = useQueryString();

  function isChecked() {
    if (defaultChecked && (allParams.format === "" || !allParams.format)) {
      return true;
    }

    if (allParams.format === title) {
      return true;
    }

    return false;
  }

  return (
    <Link
      className={`btn-primary-outline ${isChecked() && "btn-primary-outline--active"}`}
      href={`/${pathname + "?" + createQueryString("format", title)}`}
    >
      {title}
    </Link>
  );
}
