"use client";
import { IFutureControlPanel } from "@/shared/data/administrator/futures/futureControlPanel/futureControlPanelData";
import { ChartBar, PlusCircleIcon, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { FC, ReactNode, useMemo } from "react";
import Link from "next/link";

interface FutureControlPanelItemProps {
  type: string;
  item: IFutureControlPanel;
}

const FutureControlPanelItem: FC<FutureControlPanelItemProps> = ({
  type,
  item,
}) => {
  const pathname = usePathname();

  const iconMapper: Record<string, ReactNode> = useMemo(
    () => ({
      statistics: <ChartBar />,
      add: <PlusCircleIcon />,
      view: <Users />,
    }),
    []
  );

  return (
    <Link
      href={`${item.href}/${type}/${item.label}`}
      className={`
        px-4 py-2 rounded-lg text-left font-medium transition
        hover:bg-blue-500 hover:text-white
        focus:bg-blue-500 focus:text-white
        ${pathname === item.href ? "bg-blue-600 text-white" : ""}
      `}
    >
      <div className="capitalize flex gap-2 items-center">
        <span>{iconMapper[item.label]}</span>
        <span>{item.label}</span>
      </div>
    </Link>
  );
};

export default FutureControlPanelItem;
