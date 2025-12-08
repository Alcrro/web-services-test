import { futureControlPanelData } from "@/shared/data/administrator/futures/futureControlPanel/futureControlPanelData";
import FutureControlPanelItem from "./FutureControlPanelItem";

const FutureControlPanel = ({ type }: { type: string }) => {
  return (
    <nav className="w-full max-w-[420px] mx-auto flex flex-col gap-2 p-2 rounded-xl shadow-md min-w-[220px]">
      {futureControlPanelData.map((item) => {
        return (
          <FutureControlPanelItem type={type} item={item} key={item.label} />
        );
      })}
    </nav>
  );
};

export default FutureControlPanel;
