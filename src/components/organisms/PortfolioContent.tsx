import { FC, Suspense } from "react";
import { PortfolioPageContent } from "@/shared/data/consts/portfololioPage/portfolioPageContent";
import HeroSection from "./portfolio/HeroSection";
import PortfolioProjectsClient from "../molecules/portfolio/PortfolioProjectsClient";
import TestimonialsSection from "../molecules/Cards/testimonials/TestimonialSection";
import PortfolioCta from "../molecules/portfolio/PortfolioCta";

interface PortfolioContentProps {
  portfolioContent: PortfolioPageContent;
}

const PortfolioContent: FC<PortfolioContentProps> = ({ portfolioContent }) => {
  const { hero, projects, filters, testimonials, cta } = portfolioContent;

  return (
    <main className="space-y-32 px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <HeroSection {...hero} />

      <Suspense fallback={"Loading projects..."}>
        <PortfolioProjectsClient projects={projects} filters={filters} />
      </Suspense>

      {testimonials && <TestimonialsSection {...testimonials} />}

      <PortfolioCta
        title={cta.title}
        buttonText={cta.button.text}
        buttonHref={cta.button.href}
      />
    </main>
  );
};

export default PortfolioContent;
