"use client";
import { PortfolioFilterItem } from "@/shared/data/consts/portfololioPage/portfolioPageContent";
import { FC } from "react";
import PortfolioFiltersButton from "../atoms/buttons/PortfolioFiltersButton";

interface FiltersProps {
  filters: PortfolioFilterItem[];
  activeFilter: string;
  onSelect: (filter: string) => void;
}

const Filters: FC<FiltersProps> = ({ filters, activeFilter, onSelect }) => {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {filters.map((f) => (
        <PortfolioFiltersButton
          filter={f}
          activeService={activeFilter}
          onSelect={onSelect}
          key={f.id}
        />
      ))}
    </div>
  );
};

export default Filters;
