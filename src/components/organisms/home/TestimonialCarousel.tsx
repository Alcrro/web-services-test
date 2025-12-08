// modules/home/components/organisms/TestimonialCarousel.tsx
"use client";
import { ReactNode, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import style from "@/components/styles/testimonialCarousel.module.scss";
import NavigationButton from "@/components/atoms/buttons/NavigationButton";
import CarouselTracker from "./CarouselTracker";
import useCarouselSizing from "@/shared/hooks/useCarouselSizing";
import useCarouselScroll from "@/shared/hooks/useCarouselScroll";
import { CarouselCards } from "./CarouselCards";

interface TestimonialCarouselProps {
  children: ReactNode[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  children,
}) => {
  const minCardWidth = 200;
  const maxCardWidth = 300;
  const gap = 8;
  const maxVisibleCards = 5;
  const refContent = useRef<HTMLDivElement>(null);

  const { visibleCards, cardWidth } = useCarouselSizing({
    refContent,
    childrenCount: children.length,
    minCardWidth,
    maxCardWidth,
    maxVisibleCards,
    gap,
  });

  const { currentIndex, moveLeft, moveRight } = useCarouselScroll({
    refContent,
    cardWidth,
    gap: 8,
  });

  return (
    <div className={`${style.carousel} relative`}>
      {/* Left button */}
      <NavigationButton
        className={`${style.carousel_btn} ${
          style.left
        } absolute top-1/2 -translate-y-1/2 rounded-full ${
          currentIndex === 0
            ? "text-gray-400/50 cursor-auto"
            : "text-gray-400 hover:text-(--color-text) cursor-pointer"
        }`}
        isDisabled={currentIndex === 0}
        handleMove={moveLeft}
      >
        <FaArrowAltCircleLeft className="text-2xl" />
      </NavigationButton>

      {/* Carousel track */}
      <div className={style.carousel_track_wrapper}>
        <CarouselTracker
          as="div"
          className={`${style.content} overflow-x-auto gap-2 scroll-smooth ${style.no_scrollbar}`}
          style={{ scrollSnapType: "x mandatory" }}
          ref={refContent}
        >
          <CarouselCards cardWidth={cardWidth} style={style}>
            {children}
          </CarouselCards>
        </CarouselTracker>
      </div>

      {/* Right button */}
      <NavigationButton
        className={`${style.carousel_btn} ${
          style.right
        } absolute right-0 top-1/2 -translate-y-1/2 rounded-full ${
          currentIndex >= children.length - visibleCards
            ? "text-gray-400/50 cursor-auto"
            : "text-gray-400 hover:text-(--color-text) cursor-pointer"
        }`}
        isDisabled={currentIndex >= children.length - visibleCards}
        handleMove={moveRight}
      >
        <FaArrowCircleRight className="text-2xl" />
      </NavigationButton>
    </div>
  );
};
