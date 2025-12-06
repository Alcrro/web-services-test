import Button from "@/shared/ui/Button";
import React from "react";

const PortfolioCtaBtn = ({ href, text }: { href: string; text: string }) => {
  return (
    <Button
      href={href}
      variant="secondary"
      className="cta-button w-fit mx-auto"
    >
      {text}
    </Button>
  );
};

export default PortfolioCtaBtn;
