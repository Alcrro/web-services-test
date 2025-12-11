import { FC } from "react";
import { PortfolioProject } from "@/shared/data/consts/portfololioPage/portfolioPageContent";
import PortfolioCardImage from "@/components/atoms/portfolio/card/PortfolioCardImage";
import PortfolioCardTitle from "@/components/atoms/portfolio/card/PortfolioCardTitle";
import PortfolioCardDescription from "@/components/atoms/portfolio/card/PortfolioCardDescripion";
import PortfolioTagsItem from "@/components/molecules/portfolio/PortfolioCardTagsItem";

interface PortfolioCardProps {
  project: PortfolioProject;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ project }) => (
  <a
    href={project.link}
    className="portfolio-card group"
    style={{
      backgroundColor: "var(--color-bg-section)",
      borderRadius: "1rem",
      minHeight: "33.75rem",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <PortfolioCardImage image={project.image} alt={project.title} />

    <div className="py-6 px-3 flex-1">
      <PortfolioCardTitle title={project.title} />
      <PortfolioCardDescription description={project.description} />
      <div className="flex flex-wrap gap-2 justify-between">
        {project.tags.map((tag, index) => {
          if (!tag.value) return null;

          return <PortfolioTagsItem tag={tag} key={index} />;
        })}
      </div>
    </div>
  </a>
);

export default PortfolioCard;
