import { PortfolioFilterItem } from "@/shared/data/consts/portfololioPage/portfolioPageContent";
import React, { FC } from "react";
import PortfolioFiltersButton from "../atoms/buttons/PortfolioFiltersButton";

interface FiltersProps {
  filters: PortfolioFilterItem[];
  activeService: string | null;
  onSelect: (key: string) => void;
}

const Filters: FC<FiltersProps> = ({ filters, activeService, onSelect }) => (
  <div className="flex justify-center gap-4 flex-wrap">
    {filters.map((f) => (
      <PortfolioFiltersButton
        filter={f}
        activeService={activeService}
        onSelect={onSelect}
        key={f.id}
      />
    ))}
  </div>
);

export default Filters;
