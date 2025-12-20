import FAQ from "@/components/organisms/home/FAQ";
import PartnerList from "@/components/organisms/home/PartnerList";
import ProcessWorkflow from "@/components/organisms/home/ProcessWorkflow";
import HomeHero from "@/components/organisms/home/HomeHero";
import Testimonials from "@/components/organisms/home/HomeTestimonials";
import DefaultLayout from "@/components/templates/defaultLayout/DefaultLayout";
import { homePageContent } from "@/shared/data/consts/homePage/homePageContent";
import { Metadata } from "next";
import { buildSEO } from "@/lib/seo/seo.utils";
import { homePageSEO } from "@/shared/data/seo/homeSEO";

export const metadata: Metadata = {
  ...buildSEO(homePageSEO),
};

export default function Home() {
  const { faq, hero, partners, process, testimonials } = homePageContent;

  return (
    <DefaultLayout>
      <section id="hero" aria-labelledby="hero-title">
        <HomeHero items={hero} />
      </section>
      <section>
        <ProcessWorkflow process={process} />
      </section>
      <section>
        <Testimonials testimonials={testimonials} />
      </section>
      <section className="py-8">
        <PartnerList partners={partners} />
      </section>
      <section>
        <FAQ faq={faq} />
      </section>
    </DefaultLayout>
  );
}
