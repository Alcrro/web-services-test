import React from "react";
import style from "@/components/styles/servicesList.module.scss";
import { IServiceFeature } from "@/modules/services/domain/types/service.types";
import Title from "@/shared/ui/Title";
import ServiceFeaturesList from "./ServiceFeaturesList";
const ServicesList = ({ features = [] }: { features: IServiceFeature[] }) => {
  // Precompute featureId → icon mapping
  const includedFeatures = features.filter((f) => f.type === "STANDARD");
  const extraFeatures = features.filter((f) => f.type !== "STANDARD");

  return (
    <>
      <div
        className={`${
          (features?.length ?? 0) >= 4 || (features?.length ?? 0) >= 4
            ? style.expend
            : ""
        }`}
      >
        {/* Included features */}
        <ServiceFeaturesList features={includedFeatures} />

        {/* Optional features */}
        {extraFeatures.length > 0 && (
          <>
            <Title as={"h4"} className="text-sm mt-4 mb-2 text-gray-400 italic">
              Optional Features
            </Title>
            <ServiceFeaturesList features={includedFeatures} />
          </>
        )}
      </div>
    </>
  );
};

export default ServicesList;
