"use client";
import { PortfolioFilterItem } from "@/shared/data/consts/portfololioPage/portfolioPageContent";
import { FC } from "react";
import PortfolioFiltersButton from "../atoms/buttons/PortfolioFiltersButton";
import { useRouter, useSearchParams } from "next/navigation";

interface FiltersProps {
  filters: PortfolioFilterItem[];
  activeService: string | null;
}

const Filters: FC<FiltersProps> = ({ filters, activeService }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filtersCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("services", category);
    router.push(`?${params.toString()}`);
  };
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {filters.map((f) => (
        <PortfolioFiltersButton
          filter={f}
          activeService={activeService}
          onSelect={filtersCategory}
          key={f.id}
        />
      ))}
    </div>
  );
};

export default Filters;
