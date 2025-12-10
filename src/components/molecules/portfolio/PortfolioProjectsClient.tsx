import {
  PortfolioFilterItem,
  PortfolioProject,
} from "@/shared/data/consts/portfololioPage/portfolioPageContent";

import Filters from "../Filters";
import ProjectsGrid from "./ProjectsGrid";

interface PortfolioProjectsClientProps {
  projects: PortfolioProject[];
  filters: PortfolioFilterItem[];
  searchParams?: Record<string, string>;
}

export default function PortfolioProjectsClient({
  projects,
  filters,
  searchParams,
}: PortfolioProjectsClientProps) {
  const searchParamsValue = Object.values(
    searchParams as Record<string, string>
  )[0];

  return (
    <>
      <Filters filters={filters} activeService={searchParamsValue} />
      <ProjectsGrid projects={projects} searchParamsValue={searchParamsValue} />
    </>
  );
}
