export const dynamic = "force-dynamic";

import ServiceCard from "@/components/molecules/service/card/ServiceCard";
import ServicesList from "@/components/molecules/service/card/ServicesList";
import { getFutureServiceById } from "@/services/api/services/servicesApi";

// app/services/[slug]/page.tsx
import { Metadata } from "next";
import { servicesSEO } from "@/shared/data/seo/serviceSEO";
import { generateSEO } from "@/lib/seo";
import { getDataCachedFromDB } from "@/shared/utils/getDataCached";
import { IService } from "@/modules/services/domain/types/service.types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const seo = servicesSEO.find((s) => s.id === slug);
  if (!seo)
    return generateSEO({
      title: "Service Not Found",
      description: "Service not found",
    });

  return {
    ...generateSEO({
      title: seo.title,
      description: seo.description,
      url: `https://alcrro.ro/services/${slug}`,
      image: seo.image,
    }),
    metadataBase: new URL("https://alcrro.ro"),
    other: {
      keywords: seo.keywords.join(", "),
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Find the service
  const services = await getDataCachedFromDB<IService, typeof id>(
    getFutureServiceById,
    "serviceId",
    60,
    id
  );

  if (!services || services.serviceFeatures.length < 1)
    return <p>Service not found</p>;

  return (
    <div className="">
      <ServiceCard service={services}>
        <ServicesList features={services.serviceFeatures} />
      </ServiceCard>
    </div>
  );
}
