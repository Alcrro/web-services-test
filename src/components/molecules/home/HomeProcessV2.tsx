import HomeProcessStep from "@/components/molecules/home/HomeProcessStep";
import { IProcessSteps } from "@/shared/data/consts/homePage/homePageContent";
import { Fragment } from "react";

const HomeProcessV2 = ({ steps }: { steps: IProcessSteps[] }) => {
  return (

      {steps.map((step, index) => (
        <Fragment key={step.number}>
          <HomeProcessStep step={step} showArrow={index > 0} />
        </Fragment>
      ))}
    </div>
  );
};

export default HomeProcessV2;
