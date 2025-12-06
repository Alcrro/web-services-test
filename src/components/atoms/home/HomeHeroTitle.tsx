import React from "react";
import style from "@/components/styles/homeHeroTitle.module.scss";
import Title from "../../../shared/ui/Title";
const HomeHeroTitle = ({ title }: { title: string }) => {
  return (
    <Title
      className={`${style.titleC} uppercase font-medium text-center text-[clamp(1rem,5vw,2rem)]`}
      id="hero-title"
    >
      {title}
    </Title>
  );
};

export default HomeHeroTitle;
