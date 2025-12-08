import TestimonialsReviewDescription from "@/components/atoms/portfolio/TestimonialsReviewDescription";
import TestimonialsReviewImage from "@/components/atoms/portfolio/TestimonialsReviewImage";
import TestimonialsReviewTitle from "@/components/atoms/portfolio/TestimonialsReviewTitle";
import { ITestimonialReview } from "@/shared/data/consts/homePage/homePageContent";

import { FC } from "react";

interface ITestimonialReviewItemProps {
  review: ITestimonialReview;
}
const TestimonialReviewsItem: FC<ITestimonialReviewItemProps> = ({
  review,
}) => {
  return (
    <div className="benefit-card p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="flex items-center gap-4 mb-4">
        <TestimonialsReviewImage image={review.image} />
        <div>
          <TestimonialsReviewTitle title={review.name} />
          <TestimonialsReviewDescription role={review.name} />
        </div>
      </div>
      <p style={{ color: "var(--color-text-secondary)" }}>{review.text}</p>
    </div>
  );
};

export default TestimonialReviewsItem;
