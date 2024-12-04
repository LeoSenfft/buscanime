"use client";

import React from "react";
import { FilterItem } from "./FilterItem";

export function Filter() {
  return (
    <div className="Filter flex flex-wrap justify-center gap-5 text-sm">
      <FilterItem title="All Formats" defaultChecked />
      <FilterItem title="TV Show" />
      <FilterItem title="Movie" />
      <FilterItem title="TV Short" />
      <FilterItem title="Special" />
      <FilterItem title="OVA" />
      <FilterItem title="ONA" />
      <FilterItem title="Music" />
    </div>
  );
}
