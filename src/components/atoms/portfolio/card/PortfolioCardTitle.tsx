import Title from "@/shared/ui/Title";
import React from "react";

const PortfolioCardTitle = ({ title }: { title: string }) => {
  return (
    <Title
      as="h3"
      className="text-xl font-semibold mb-2"
      style={{ color: "var(--color-text)" }}
    >
      {title}
    </Title>
  );
};

export default PortfolioCardTitle;
