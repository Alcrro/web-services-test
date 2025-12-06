"use client";
import React, { useRef } from "react";
import useCloseDiv from "@/shared/utils/useCloseDiv";
import { useModalStore } from "@/context/modalStore";
import { Users, ListCheck, ChevronRight } from "lucide-react";

interface ControlPanelItemProps {
  name: string;

  children: React.ReactNode;
}

const ControlPanelItem = ({ name, children }: ControlPanelItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const iconMapper: Record<string, React.ReactNode> = React.useMemo(
    () => ({
      clients: <Users />,
      orders: <ListCheck />,
    }),
    []
  );
  const modals = useModalStore((store) => store.modals);
  const toggle = useModalStore((store) => store.toggle);
  const isOpen = !!modals[name];

  useCloseDiv({
    ref: itemRef,
    state: isOpen,
    setState: () => toggle(name),
  });

  return (
    <div
      ref={itemRef}
      className={`element capitalize flex gap-2 pb-2 rounded-lg ${
        isOpen ? "relative" : ""
      }`}
      onClick={() => toggle(name)}
    >
      <span>{iconMapper[name]}</span>
      <span>{name}</span>
      <ChevronRight className="ml-auto" />
      <div
        className={`absolute -right-full bg-(--color-bg) py-2 rounded-lg shadow transition-all duration-300 ${
          isOpen ? "opacity-100 visible z-30" : "opacity-0 invisible z-0"
        }`}
      >
        <div className="text-center">{name}</div>
        {children}
      </div>
    </div>
  );
};

export default ControlPanelItem;
