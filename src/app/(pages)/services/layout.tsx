import { ReactNode } from "react";
import DefaultLayout from "@/components/templates/defaultLayout/DefaultLayout";
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { homePageSEO } from "@/shared/data/seo/homeSEO";
import { METADATA_BASE, SITE_URL } from "@/shared/utils/config";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...generateSEO({
      title: homePageSEO.title,
      description: homePageSEO.description,
      url: SITE_URL,
      image: homePageSEO.openGraph.images[0].url,
    }),
    metadataBase: METADATA_BASE,
    other: {
      keywords: homePageSEO.keywords.join(", "),
    },
  };
}
export default function layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <DefaultLayout>
      {children}
      {modal}
    </DefaultLayout>
  );
}
