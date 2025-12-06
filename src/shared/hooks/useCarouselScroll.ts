import React, { useEffect, useState } from "react";

const useCarouselScroll = ({
  refContent,
  cardWidth,
  gap,
}: {
  refContent: React.RefObject<HTMLDivElement | null>;
  cardWidth: number;
  gap: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () =>
    refContent.current?.scrollBy({
      left: -(cardWidth + gap),
      behavior: "smooth",
    });

  const moveRight = () =>
    refContent.current?.scrollBy({
      left: cardWidth + gap,
      behavior: "smooth",
    });

  useEffect(() => {
    const container = refContent.current;
    if (!container) return;
    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / (cardWidth + gap));
      setCurrentIndex(index);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [cardWidth, gap, refContent]);
  return { currentIndex, moveLeft, moveRight };
};

export default useCarouselScroll;
