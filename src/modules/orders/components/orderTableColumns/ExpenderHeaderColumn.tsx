"use client";
import { Row } from "@tanstack/react-table";
import React from "react";

interface TableExpanderProps<T> {
  row: Row<T>;
}
function ExpenderHeaderColumn<T>({ row }: TableExpanderProps<T>) {
  if (!row.getCanExpand()) return null;
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        row.getToggleExpandedHandler()();
      }}
    >
      {row.getIsExpanded() ? "−" : "+"}
    </button>
  );
}

export default ExpenderHeaderColumn;
