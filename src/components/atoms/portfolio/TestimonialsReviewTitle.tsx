import Title from "@/shared/ui/Title";
import React from "react";

const TestimonialsReviewTitle = ({ title }: { title: string }) => {
  return (
    <Title
      as={"h4"}
      className="font-semibold"
      style={{ color: "var(--color-text)" }}
    >
      {title}
    </Title>
  );
};

export default TestimonialsReviewTitle;
