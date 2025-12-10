import ServiceCta from "@/components/molecules/service/ServiceCta";
import ServiceFaq from "@/components/molecules/service/ServiceFaq";
import ServiceHero from "@/components/molecules/service/ServiceHero";
import ServiceProcess from "@/components/molecules/service/ServiceProcess";
import ServicesBenefits from "@/components/molecules/service/card/ServicesBenefits";
import { servicesPageContent } from "@/shared/data/consts/servicePage/servicePageContent";
import ServicesList from "@/components/organisms/ServicesList";
import DefaultLayout from "@/components/templates/defaultLayout/DefaultLayout";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { buildSEO } from "@/lib/seo/seo.utils";
import { servicesSEO } from "@/shared/data/seo/servicesSEO";

export async function generateMetadata(): Promise<Metadata> {
  const seoObjects = servicesSEO.map(buildSEO);

  const title = seoObjects.map((s) => s.title).join(" | ");
  const description = seoObjects.map((s) => s.description).join(". ");
  const openGraph = seoObjects[0].openGraph || {};

  return {
    title,
    description,
    openGraph,
  };
}
export default function ServicesPage() {
  const { hero, faq, benefits, process, cta } = servicesPageContent;

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4">
        {/* Hero */}
        <section
          aria-labelledby="services-heading"
          className="text-center space-y-4"
        >
          <ServiceHero hero={hero} />
        </section>

        {/* Services Cards */}

        <Suspense fallback={<Loading />}>
          <ServicesList />
        </Suspense>

        {/* Benefits */}
        <section
          className="p-10 rounded-2xl shadow-inner"
          style={{ backgroundColor: "var(--color-bg-section)" }}
        >
          <ServicesBenefits benefits={benefits} />
        </section>

        {/* Process */}
        <section>
          <ServiceProcess process={process} />
        </section>

        {/* FAQ */}
        <section>
          <ServiceFaq faq={faq} />
        </section>

        {/* Final CTA */}
        <section
          className="text-center py-16 rounded-3xl shadow-lg"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg)",
          }}
        >
          <ServiceCta cta={cta} />
        </section>
      </div>
    </DefaultLayout>
  );
}
