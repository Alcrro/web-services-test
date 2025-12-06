import React from "react";
import FutureControlPanel from "./FutureControlPanel";
import ControlPanelItem from "../organisms/ControlPanelItem";

const ControlPanel = ({ item }: { item: { name: string; href: string } }) => {
  return (
    <ControlPanelItem key={item.name} name={item.name}>
      <FutureControlPanel type={item.name} />
    </ControlPanelItem>
  );
};

export default ControlPanel;
