import Image from "next/image";
import { ITestimonialReview } from "@/shared/data/consts/homePage/homePageContent";

const TestimonialCard = ({ review }: { review: ITestimonialReview }) => {
  return (
    <>
      <Image
        src={review.image}
        alt={review.name}
        width={1000}
        height={1000}
        className="w-35 h-35 rounded-full bg-gray-300 mx-auto"
      />
      <div>{review.name}</div>
      <div>{review.role}</div>
      <div className="text-center text-gray-500 text-sm">{review.text}</div>
    </>
  );
};

export default TestimonialCard;
