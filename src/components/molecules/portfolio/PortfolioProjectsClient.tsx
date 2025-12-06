"use client";
import {
  PortfolioFilterItem,
  PortfolioProject,
} from "@/shared/data/consts/portfololioPage/portfolioPageContent";
import { useState } from "react";
import Filters from "../Filters";
import ProjectsGrid from "./ProjectsGrid";
import { useRouter, useSearchParams } from "next/navigation";
import { useSkeletonFallback } from "@/shared/hooks/useSkeletonFallback";

interface PortfolioProjectsClientProps {
  projects: PortfolioProject[];
  filters: PortfolioFilterItem[];
}

export default function PortfolioProjectsClient({
  projects,
  filters,
}: PortfolioProjectsClientProps) {
  const [visibleProjects, setVisibleProjects] =
    useState<PortfolioProject[]>(projects);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const services = searchParams.get("services");

  const filtersCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("services", category);
    router.push(`?${params.toString()}`);
  };

  useSkeletonFallback({
    filterKey: services ?? "all",
    data: projects,
    setVisibleProjects: setVisibleProjects,
    setLoading: setLoading,
  });

  return (
    <>
      <Filters
        filters={filters}
        activeService={services}
        onSelect={filtersCategory}
      />
      <ProjectsGrid projects={visibleProjects} loading={loading} />
    </>
  );
}
