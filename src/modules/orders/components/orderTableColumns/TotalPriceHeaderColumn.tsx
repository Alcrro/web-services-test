"use client";
import { ArrowDown, ArrowUp } from "lucide-react";

import { useSortableColumn } from "../../../../shared/utils/handleSort";

const TotalPriceHeaderColumn = () => {
  const { currentDirection, currentField, onClick } =
    useSortableColumn("totalPrice");

  return (
    <div
      className="flex flex-col gap-1 items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      Total Price
      {currentField === "totalPrice" && currentDirection === "asc" && (
        <ArrowDown size={14} />
      )}
      {currentField === "totalPrice" && currentDirection === "desc" && (
        <ArrowUp size={14} />
      )}
      {!(currentField === "totalPrice") && (
        <div className="flex">
          <ArrowUp size={14} className="opacity-30" />
          <ArrowDown size={14} className="opacity-30" />
        </div>
      )}
    </div>
  );
};

export default TotalPriceHeaderColumn;
