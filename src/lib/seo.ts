import { Metadata } from "next";

interface SEOOptions {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export function generateSEO({
  title,
  description,
  url,
  image,
}: SEOOptions): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: image ? [{ url: image }] : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
