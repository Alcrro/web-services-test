import React from "react";

interface TestimonialTextProps {
  text: string;
}

const TestimonialText: React.FC<TestimonialTextProps> = ({ text }) => (
  <p style={{ color: "var(--color-text-secondary)" }}>{text}</p>
);

export default TestimonialText;
