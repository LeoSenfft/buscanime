import React, { type FormEvent } from "react";
import { SearchForm } from "./SearchForm";
import { Filter } from "./Filter";

interface TopBarProps {}

export function TopBar({}: TopBarProps) {
  return (
    <div>
      <Filter />
      <SearchForm />
    </div>
  );
}
