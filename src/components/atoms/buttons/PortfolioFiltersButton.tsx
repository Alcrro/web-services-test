"use client";
import { FC } from "react";
import Button from "../../../shared/ui/Button";
import { PortfolioFilterItem } from "@/shared/data/consts/portfololioPage/portfolioPageContent";

interface FiltersProps {
  filter: PortfolioFilterItem;
  activeService: string | null;
  onSelect: (key: string) => void;
}
const PortfolioFiltersButton: FC<FiltersProps> = ({
  filter,
  activeService,
  onSelect,
}) => {
  return (
    <Button
      onClick={() => onSelect(filter.key)}
      className={`px-4 py-2 rounded-lg font-medium transition ${
        activeService === filter.key
          ? "bg-(--color-accent) text-(--color-bg)"
          : "bg-(--color-bg-section) text-(--color-text)"
      }`}
    >
      {filter.name}
    </Button>
  );
};

export default PortfolioFiltersButton;
