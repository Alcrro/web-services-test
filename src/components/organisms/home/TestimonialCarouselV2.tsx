"use client";
import React, { ReactNode, useLayoutEffect, useRef, useState } from "react";
import styles from "@/components/styles/testimonialCarouselV2.module.scss";
import NavigationButton from "@/components/atoms/buttons/NavigationButton";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const TestimonialCarouselV2 = ({ children }: { children: ReactNode[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const scrollAmount = () => {
    const track = trackRef.current;
    if (!track) return 0;

    const card = track.querySelector(`.${styles.card}`) as HTMLElement;
    if (!card) return 0;

    return card.offsetWidth + 16; // card width + gap
  };

  const updateButtons = () => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 0);
    setCanNext(track.scrollLeft < maxScroll - 5);
  };

  const handleNext = () => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  };

  const handlePrev = () => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
  };

  useLayoutEffect(() => {
    updateButtons();
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", updateButtons);
    return () => track.removeEventListener("scroll", updateButtons);
  }, []);

  return (
    <div className={styles.wrapper}>
      <NavigationButton
        className={`${styles.carousel_btn} ${
          styles.left
        } absolute top-1/2 -translate-y-1/2 rounded-full ${
          !canPrev
            ? "text-gray-400/50 cursor-auto"
            : "text-gray-400 hover:text-(--color-text) cursor-pointer"
        }`}
        isDisabled={!canPrev}
        handleMove={handlePrev}
      >
        <FaArrowAltCircleLeft className="text-2xl" />
      </NavigationButton>
      <div className={styles.track} ref={trackRef}>
        {children.map((child, index) => (
          <div key={index} className={styles.card}>
            {child}
          </div>
        ))}
        <NavigationButton
          className={`${styles.carousel_btn} ${
            styles.right
          } absolute right-0 top-1/2 -translate-y-1/2 rounded-full ${
            !canNext
              ? "text-gray-400/50 cursor-auto"
              : "text-gray-400 hover:text-(--color-text) cursor-pointer"
          }`}
          isDisabled={!canNext}
          handleMove={handleNext}
        >
          <FaArrowCircleRight className="text-2xl" />
        </NavigationButton>
      </div>
    </div>
  );
};

export default TestimonialCarouselV2;
