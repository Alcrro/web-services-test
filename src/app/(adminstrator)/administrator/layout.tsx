import { futureDashboardData } from "@/shared/data/administrator/futures/futureDashboard/futureDashboardData";
import ControlPanel from "@/components/molecules/ControlPanel";
import ClientPanelLayout from "@/components/templates/controlPanel/ControlPanelLayout";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const cpArray = futureDashboardData; // se încarcă pe server

  return (
    <ClientPanelLayout>
      <div className="flex gap-2 max-lg:flex-col">
        <div className="control_panel w-full max-w-[220px] bg-(--color-bg-section) rounded-xl">
          {cpArray.map((item, index) => {
            return <ControlPanel item={item} key={index} />;
          })}
        </div>

        {/* Content */}
        {children}
      </div>
    </ClientPanelLayout>
  );
};

export default layout;
