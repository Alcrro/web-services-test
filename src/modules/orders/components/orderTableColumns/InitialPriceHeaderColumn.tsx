"use client";
import { ArrowDown, ArrowUp } from "lucide-react";

import { useSortableColumn } from "../../../../shared/utils/handleSort";

const InitialPriceHeaderColumn = () => {
  const { currentDirection, currentField, onClick } =
    useSortableColumn("initialPrice");
  return (
    <div
      className="flex flex-col gap-1 items-center justify-center"
      onClick={onClick}
    >
      Initial Price
      {currentField === "initialPrice" && currentDirection === "asc" && (
        <ArrowDown size={14} />
      )}
      {currentField === "initialPrice" && currentDirection === "desc" && (
        <ArrowUp size={14} />
      )}
      {!(currentField === "initialPrice") && (
        <div className="flex">
          <ArrowUp size={14} className="opacity-30" />
          <ArrowDown size={14} className="opacity-30" />
        </div>
      )}
    </div>
  );
};

export default InitialPriceHeaderColumn;
