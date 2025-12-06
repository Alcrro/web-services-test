import { IServiceFeature } from "@/modules/services/domain/types/service.types";
import { servicesV11 } from "@/shared/data/consts/cardServices/cardServicesData";
import { modifyIdForIcon } from "@/shared/utils/modifyIdForIcons";
import React, { FC } from "react";
import ServiceFeatureListItem from "./ServiceFeatureListItem";
import ServicesListIconMapper from "../../../../shared/data/mappers/ServicesListIconMapper";

interface IServiceFeaturesProps {
  features: IServiceFeature[];
}
const ServiceFeaturesList: FC<IServiceFeaturesProps> = ({ features }) => {
  const iconsMap = ServicesListIconMapper();

  return features.map((feature, i) => {
    const internalFeature = servicesV11
      .flatMap((service) => service.serviceFeatures)
      .find((f) => f.id === modifyIdForIcon(f.id, feature.uniqueId));
    const iconKey = internalFeature?.icon;

    const icon = iconKey ? iconsMap[iconKey] : null;
    return (
      <div key={i} className="flex gap-2 items-center py-2">
        <ServiceFeatureListItem
          name={feature?.feature?.name ?? "Unknown feature"}
          icon={icon}
          key={i}
        />
      </div>
    );
  });
};

export default ServiceFeaturesList;
