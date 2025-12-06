import Title from "@/shared/ui/Title";
import React from "react";

const PortfolioCtaTitle = ({ title }: { title: string }) => {
  return (
    <Title as={"h2"} className="text-4xl font-bold mb-4">
      {title}
    </Title>
  );
};

export default PortfolioCtaTitle;
