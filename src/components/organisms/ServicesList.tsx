import Loading from "@/app/(pages)/services/(main)/loading";
import Services from "@/modules/services/components/Services";
import { Suspense } from "react";

const ServicesList = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Services />
    </Suspense>
  );
};

export default ServicesList;
