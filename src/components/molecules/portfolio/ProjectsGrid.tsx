import { FC } from "react";
import PortfolioCard from "./PortfolioCard";
import { PortfolioProject } from "@/shared/data/consts/portfololioPage/portfolioPageContent";
import PortfolioProjectCardSkeleton from "@/components/skeletons/PortfolioProjectCardSkeleton";

interface ProjectsGridProps {
  projects: PortfolioProject[];
  loading: boolean;
}

const ProjectsGrid: FC<ProjectsGridProps> = ({ projects, loading }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 w-full">
      {projects.map((p, idx) =>
        loading ? (
          <PortfolioProjectCardSkeleton key={idx} />
        ) : (
          <PortfolioCard key={p.id || idx} project={p} />
        )
      )}
    </div>
  );
};

export default ProjectsGrid;
