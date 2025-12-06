import { ServiceProcessStep } from "@/shared/data/consts/servicePage/servicePageContent";
import Title from "@/shared/ui/Title";
import { FC } from "react";

interface IServiceProcessStepItemProps {
  step: ServiceProcessStep;
}
const ServicesProcessStepsListItem: FC<IServiceProcessStepItemProps> = ({
  step,
}) => {
  return (
    <li className="mb-10 ml-6">
      <div
        className="absolute w-3 h-3 rounded-full -left-1.5 mt-1.5"
        style={{ backgroundColor: "var(--color-accent)" }}
      ></div>
      <Title
        as={"h3"}
        className="text-xl font-semibold"
        style={{ color: "var(--color-text)" }}
      >
        {step.step}. {step.title}
      </Title>
      <p style={{ color: "var(--color-text-secondary)" }}>{step.description}</p>
    </li>
  );
};

export default ServicesProcessStepsListItem;
