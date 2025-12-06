import LoadingSpinner from "@/shared/ui/LoadingSpinner";
import ServiceCardSkeleton from "@/components/skeletons/ServiceCardSkeleton";
import React from "react";

const Loading = ({ spinner }: { spinner?: boolean | false }) => {
  return spinner ? <LoadingSpinner /> : <ServiceCardSkeleton />;
};

export default Loading;
