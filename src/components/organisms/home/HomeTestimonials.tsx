import { IHomeTestimonial } from "@/shared/data/consts/homePage/homePageContent";
import React from "react";
import style from "@/components/styles/testimonials.module.scss";
import TestimonialCard from "../../molecules/Cards/testimonials/TestimonialCard";
import TestimonialCarouselV2 from "./TestimonialCarouselV2";

const HomeTestimonials = ({
  testimonials,
}: {
  testimonials: IHomeTestimonial;
}) => {
  const { reviews, title } = testimonials;

  return (
    <div className={style.testimonials}>
      <div className="title font-semibold text-2xl my-4 max-sm:text-center">
        {title}
      </div>
      <TestimonialCarouselV2>
        {reviews.map((review, i) => (
          <TestimonialCard review={review} key={i} />
        ))}
      </TestimonialCarouselV2>
    </div>
  );
};

export default HomeTestimonials;
