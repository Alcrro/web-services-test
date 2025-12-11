import Description from "@/shared/ui/Description";

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
