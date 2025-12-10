"use client";
import { FC, useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import PortfolioProjectCardSkeleton from "@/components/skeletons/PortfolioProjectCardSkeleton";
import { PortfolioProject } from "@/shared/data/consts/portfololioPage/portfolioPageContent";

interface ProjectsGridProps {
  projects: PortfolioProject[];
  searchParamsValue: string;
}

const ProjectsGrid: FC<ProjectsGridProps> = ({
  projects,
  searchParamsValue,
}) => {
  const [loading, setLoading] = useState(true);
  const [displayedProjects, setDisplayedProjects] = useState<
    PortfolioProject[]
  >([]);

  useEffect(() => {
    setLoading(true);
    setDisplayedProjects([]); // clear previous projects
    const timer = setTimeout(() => {
      setDisplayedProjects(projects);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [projects, searchParamsValue]);

  const skeletonCount = projects.length || 6; // show 6 skeletons if projects empty

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 w-full">
      {loading
        ? Array.from({ length: skeletonCount }).map((_, idx) => (
            <PortfolioProjectCardSkeleton key={idx} />
          ))
        : displayedProjects.map((p) => (
            <PortfolioCard key={p.id} project={p} />
          ))}
    </div>
  );
};

export default ProjectsGrid;
