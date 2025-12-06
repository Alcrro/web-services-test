"use client";
import React from "react";
import style from "@/components/styles/header.module.scss";
import { useModalStore } from "@/context/modalStore";
import Button from "@/shared/ui/Button";

export default function ToggleNavbarMenuButton() {
  const modals = useModalStore((store) => store.modals);
  const toggle = useModalStore((store) => store.toggle);
  const isOpen = !!modals["toggle_navbarMenu"];
  return (
    <Button
      className={style["toggle-label"]}
      onClick={() => toggle("toggle_navbarMenu")}
    >
      {isOpen ? "Close" : "Menu"}
    </Button>
  );
}
