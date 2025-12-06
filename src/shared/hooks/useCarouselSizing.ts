import React, { useEffect, useState } from "react";

const useCarouselSizing = ({
  refContent,
  childrenCount,
  minCardWidth = 200,
  maxCardWidth = 300,
  maxVisibleCards = 5,
  gap = 8,
}: {
  refContent: React.RefObject<HTMLDivElement | null>;
  childrenCount: number;
  minCardWidth?: number;
  maxCardWidth?: number;
  maxVisibleCards?: number;
  gap?: number;
}) => {
  const [visibleCards, setVisibleCards] = useState(maxVisibleCards);
  const [cardWidth, setCardWidth] = useState(maxCardWidth);

  useEffect(() => {
    const calculateCards = () => {
      if (!refContent.current) return;
      const containerWidth = refContent.current.offsetWidth;
      let fitCards = maxVisibleCards;
      let width = maxCardWidth;

      for (let i = maxVisibleCards; i >= 1; i--) {
        const w = (containerWidth - gap * (i - 1)) / i;
        if (w >= minCardWidth && w <= maxCardWidth) {
          fitCards = i;
          width = w;
          break;
        } else if (w > maxCardWidth) {
          fitCards = i;
          width = maxCardWidth;
          break;
        }
      }

      setVisibleCards(fitCards);
      setCardWidth(width);
    };

    calculateCards();
    window.addEventListener("resize", calculateCards);
    return () => window.removeEventListener("resize", calculateCards);
  }, [
    childrenCount,
    refContent,
    gap,
    maxCardWidth,
    maxVisibleCards,
    minCardWidth,
  ]);

  return { visibleCards, cardWidth, maxCardWidth, maxVisibleCards };
};

export default useCarouselSizing;
