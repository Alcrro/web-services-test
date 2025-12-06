import Button from "@/shared/ui/Button";
import React from "react";

const ServiceCtaButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <Button variant="secondary" href={href} className="w-fit mx-auto">
      {text}
    </Button>
  );
};

export default ServiceCtaButton;
