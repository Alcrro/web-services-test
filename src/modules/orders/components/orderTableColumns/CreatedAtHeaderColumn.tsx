"use client";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useSortableColumn } from "../../../../shared/utils/handleSort";

const CreatedAtHeaderColumn = () => {
  const { currentDirection, currentField, onClick } =
    useSortableColumn("createdAt");
  return (
    <div
      className="flex flex-col gap-1 justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      Date
      {currentField === "createdAt" && currentDirection === "asc" && (
        <ArrowDown size={14} />
      )}
      {currentField === "createdAt" && currentDirection === "desc" && (
        <ArrowUp size={14} />
      )}
      {!(currentField === "createdAt") && (
        <div className="flex">
          <ArrowUp size={14} className="opacity-30" />
          <ArrowDown size={14} className="opacity-30" />
        </div>
      )}
    </div>
  );
};

export default CreatedAtHeaderColumn;
