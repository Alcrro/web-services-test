import { IHomeProcess } from "@/shared/data/consts/homePage/homePageContent";

import { FaNetworkWired } from "react-icons/fa";
import HomeProcessV2 from "../../molecules/home/HomeProcessV2";

const ProcessWorkflow = ({ process }: { process: IHomeProcess }) => {
  return (
    <div className="workflow py-4">
      <div className="title flex gap-2 justify-center items-center font-semibold text-2xl py-2 max-[420px]:text-center max-[420px]:flex-col">
        <FaNetworkWired />
        {process.title} ?
      </div>
      <HomeProcessV2 steps={process.steps} />
    </div>
  );
};

export default ProcessWorkflow;
