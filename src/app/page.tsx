import FAQ from "@/components/organisms/home/FAQ";
import PartnerList from "@/components/organisms/home/PartnerList";
import ProcessWorkflow from "@/components/organisms/home/ProcessWorkflow";
import HomeHero from "@/components/organisms/home/HomeHero";
import Testimonials from "@/components/organisms/home/HomeTestimonials";
import DefaultLayout from "@/components/templates/defaultLayout/DefaultLayout";
import { homePageContent } from "@/shared/data/consts/homePage/homePageContent";
import { Metadata } from "next";
import { METADATA_BASE } from "@/shared/utils/config";

export const metadata: Metadata = {
  metadataBase: METADATA_BASE,
  title:
    "Custom Web Development & Digital Solutions | Profesional Web Services",
  description:
    "We build high-performance websites, custom web applications, and scalable digital solutions. End-to-end development, UX/UI design, and ongoing support built for long-term growth.",
  keywords: [
    "web development",
    "custom websites",
    "web applications",
    "digital solutions",
    "UI/UX design",
    "frontend development",
    "backend development",
    "Next.js development",
    "software services",
    "web agency",
  ],
  openGraph: {
    title:
      "Custom Web Development & Digital Solutions | Profesional Web Services",
    description:
      "High-performance websites, custom applications, and full-stack digital solutions designed for growth.",
    url: METADATA_BASE,
    type: "website",
    siteName: "Profesional Web Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development & Digital Solutions",
    description:
      "We create scalable websites, apps, and digital products that drive business growth.",
  },
  alternates: {
    canonical: METADATA_BASE,
  },
  robots: {
    index: true,
    follow: true,
  },
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
