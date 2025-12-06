import React, { FC, ReactNode } from "react";
import Features from "./Feature";

interface IServiceFeatureItemProps {
  name: string;
  icon: ReactNode;
}
const ServiceFeatureListItem: FC<IServiceFeatureItemProps> = ({
  name,
  icon,
}) => {
  return <Features feature={name ?? "Unknown  Feature"}>{icon}</Features>;
};

export default ServiceFeatureListItem;
