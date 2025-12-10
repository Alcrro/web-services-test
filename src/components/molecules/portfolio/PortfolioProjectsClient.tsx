"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Filters from "../Filters";
import {
  PortfolioProject,
  PortfolioFilterItem,
} from "@/shared/data/consts/portfololioPage/portfolioPageContent";
import PortfolioProjectCardSkeleton from "@/components/skeletons/PortfolioProjectCardSkeleton";
import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";

interface Props {
  projects: PortfolioProject[];
  filters: PortfolioFilterItem[];
  activeFilter: string;
}

export default function PortfolioProjectsClient({
  projects,
  filters,
  activeFilter,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setDisplayedProjects(projects);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [projects]);

  const handleFilterChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("services", category);
    router.push(`?${params.toString()}`);
  };

  const skeletonCount = projects.length || 6;

  return (
    <>
      <Filters
        filters={filters}
        activeFilter={activeFilter}
        onSelect={handleFilterChange}
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 w-full">
        {loading
          ? Array.from({ length: skeletonCount }).map((_, idx) => (
              <PortfolioProjectCardSkeleton key={idx} />
            ))
          : displayedProjects.map((p) => (
              <PortfolioCard key={p.id} project={p} />
            ))}
      </div>
    </>
  );
}
