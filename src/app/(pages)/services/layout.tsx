import React, { ReactNode } from "react";
import DefaultLayout from "@/components/templates/defaultLayout/DefaultLayout";
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { homePageSEO } from "@/shared/data/seo/homeSEO";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...generateSEO({
      title: homePageSEO.title,
      description: homePageSEO.description,
      url: "https://alcrro.ro",
      image: homePageSEO.openGraph.images[0].url,
    }),
    metadataBase: new URL("https://alcrro.ro"),
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
