import "dotenv/config";
import { prisma } from "../../src/lib/prisma.ts";
import { ServicePrice } from "../../src/modules/services/domain/entity/servicePrice.entity.ts";
import {
  allFeatures,
  serviceCosts,
} from "../../src/shared/data/consts/cardServices/featurePrices.ts";

import { servicesV11 } from "../../src/shared/data/consts/cardServices/cardServicesData.ts";
import { hourlyRates } from "../../src/modules/services/domain/entity/servicePrice.entity.ts";
import type { IFeatureType } from "../../src/modules/services/domain/types/service.types.ts";

const servicesEnt = new ServicePrice();

async function main() {
  for (const service of servicesV11) {
    const prices = servicesEnt.calculateServiceBreakdown(
      service.serviceFeatures,
      serviceCosts.find((f) => f.id === service.uniqueId)!,
      hourlyRates
    );

    const createdService = await prisma.service.upsert({
      where: { name: service.name },
      update: { initialPrice: prices.standardInitial },
      create: {
        uniqueId: service.uniqueId,
        slug: service.slug,
        name: service.name,
        description: service.description,
        initialPrice: prices.standardInitial,
      },
    });

    for (const feature of prices.features) {
      const featureName =
        service.serviceFeatures.find((f) => f.id === feature.id)?.name ??
        feature.name; // fallback to allFeatures name

      const createdFeature = await prisma.feature.upsert({
        where: { uniqueId: feature.id },
        update: {},
        create: {
          uniqueId: feature.id,
          name: featureName,
        },
      });

      await prisma.serviceFeature.upsert({
        where: {
          serviceId_featureId: {
            serviceId: Number(createdService.id),
            featureId: Number(createdFeature.id),
          },
        },
        update: {},
        create: {
          serviceId: Number(createdService.id),
          featureId: Number(createdFeature.id),
          type: feature.type as IFeatureType,
          uniqueId: `${createdService.uniqueId}-${createdFeature.uniqueId}`,
          isIncluded: service.serviceFeatures.find(
            (f) => f.id === createdFeature.uniqueId
          )?.isIncluded,
          hours: allFeatures.find((f) => f.id === feature.id)?.hours ?? 0,
          quantity: service.serviceFeatures.find(
            (f) => f.uniqueId === feature.id
          )?.quantity,

          unitPrice: prices.features.find((f) => f.id === feature.id)?.price, // <-- use calculated price
        },
      });
    }
    console.log({ prices });
  }
  console.log("Seed -- services   added finished!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
