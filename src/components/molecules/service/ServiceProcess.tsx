import { ServiceProcessSection } from "@/shared/data/consts/servicePage/servicePageContent";
import Title from "@/shared/ui/Title";

import ServicesProcessStepsListItem from "./ServicesProcessStepsListItem";

const ServiceProcess = ({ process }: { process: ServiceProcessSection }) => {
  return (
    <>
      <Title
        as={"h2"}
        className="text-3xl font-bold text-center mb-8 text-(--color-text)"
      >
        {process.title}
      </Title>
      <div className="flex flex-col items-center">
        <div className="bg-(--color-border) rounded-lg pr-2">
          <ol className="relative border-l ml-6 mt-10">
            {process.steps.map((step) => (
              <ServicesProcessStepsListItem key={step.step} step={step} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ServiceProcess;
