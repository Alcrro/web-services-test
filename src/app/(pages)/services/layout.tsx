import { ReactNode } from "react";
import DefaultLayout from "@/components/templates/defaultLayout/DefaultLayout";
import { Metadata } from "next";
import { homePageSEO } from "@/shared/data/seo/homeSEO";
import { buildSEO } from "@/lib/seo/seo.utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...buildSEO({
      title: homePageSEO.title,
      description: homePageSEO.description,
      image: homePageSEO.openGraph.images[0].url,
    }),

    other: {
      keywords: homePageSEO.keywords.join(", "),
    },
  };
}
export default function layout({ children }: { children: ReactNode }) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
