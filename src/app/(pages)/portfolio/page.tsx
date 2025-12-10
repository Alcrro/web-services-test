import DefaultLayout from "@/components/templates/defaultLayout/DefaultLayout";
import { portfolioSEO } from "@/shared/data/seo/portfolioSEO";
import { Metadata } from "next";
import PortfolioCta from "@/components/molecules/portfolio/PortfolioCta";
import PortfolioProjectsClient from "@/components/molecules/portfolio/PortfolioProjectsClient";
import HeroSection from "@/components/organisms/portfolio/HeroSection";
import { portfolioPageContent } from "@/shared/data/consts/portfololioPage/portfolioPageContent";
import { buildSEO } from "@/lib/seo/seo.utils";
import dynamic from "next/dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...buildSEO(portfolioSEO),
    alternates: { canonical: "/portfolio" },
  };
}

const Portfolio = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) => {
  const searchP = await searchParams;
  const searchParamsValue = Object.values(searchP)[0];

  const { hero, projects, filters, testimonials, cta } = portfolioPageContent;

  // Filter projects server-side
  const filteredProjects =
    searchParamsValue !== undefined && searchParamsValue === "all"
      ? projects
      : projects.filter((p) => p.category === searchParamsValue);

  // Lazy-load Testimonials
  const Testimonials = dynamic(
    () => import("@/components/organisms/portfolio/TestimonialsSection"),
    { ssr: true }
  );

  return (
    <DefaultLayout>
      <main className="space-y-24 mx-auto">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <HeroSection {...hero} />
        </section>
        {/* Filters && Projects Grid */}
        <section>
          <PortfolioProjectsClient
            projects={filteredProjects}
            filters={filters}
            activeFilter={searchParamsValue}
          />
        </section>
        {/* Testimonials */}
        {testimonials && (
          <section>
            <Testimonials testimonials={testimonials} />
          </section>
        )}
        {/* Final CTA */}
        <section
          className="text-center py-16 rounded-3xl shadow-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg)",
          }}
        >
          <PortfolioCta
            buttonHref={cta.button.href}
            buttonText={cta.button.text}
            title={cta.title}
          />
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Portfolio;
