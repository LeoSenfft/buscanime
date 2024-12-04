"use client";

import useGetAllSearchParams from "@/hooks/useGetAllSearchParams";
import React, { useState, type FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import useQueryString from "@/hooks/useQueryString";

export function SearchForm() {
  const router = useRouter();
  const pathname = usePathname();

  const { allParams } = useGetAllSearchParams();
  const { createQueryString } = useQueryString();

  const [inputValue, setInputValue] = useState(allParams?.s ?? "");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    router.push(pathname + "?" + createQueryString("s", inputValue));
  }

  return (
    <form className="flex gap-2 text-sm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite algo aqui..."
        name="busca"
        defaultValue={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className="w-full"
      />

      <button className="btn-primary fle-xnone" type="submit">
        Buscar
      </button>
    </form>
  );
}
