import TestimonialsTitle from "@/components/atoms/portfolio/TestimonialsTitle";
import TestimonialReviewsItem from "@/components/molecules/portfolio/TestimonialReviewsItem";
import { IHomeTestimonial } from "@/shared/data/consts/homePage/homePageContent";

const TestimonialsSection = ({
  testimonials,
}: {
  testimonials: IHomeTestimonial;
}) => {
  return (
    <>
      <TestimonialsTitle title={testimonials.title} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.reviews.map((review, index) => (
          <TestimonialReviewsItem review={review} key={index} />
        ))}
      </div>
    </>
  );
};

export default TestimonialsSection;
