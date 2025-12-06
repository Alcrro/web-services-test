import Description from "@/shared/ui/Description";
import React from "react";

const TestimonialsReviewDescription = ({ role }: { role: string }) => {
  return (
    <Description
      as="p"
      className="text-sm"
      style={{ color: "var(--color-text-secondary)" }}
    >
      {role}
    </Description>
  );
};

export default TestimonialsReviewDescription;
