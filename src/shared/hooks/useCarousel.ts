import { Dispatch, RefObject, SetStateAction, useLayoutEffect } from "react";

interface ICarouselProps {
  trackRef: RefObject<HTMLDivElement | null>;
  setCardWidth: Dispatch<SetStateAction<number>>;
  cardWidth: number;
  setCanPrev: Dispatch<SetStateAction<boolean>>;
  setCanNext: Dispatch<SetStateAction<boolean>>;
  styles: Record<string, string>;
}
const useCarousel = ({
  trackRef,
  setCardWidth,
  cardWidth,
  setCanPrev,
  setCanNext,
  styles,
}: ICarouselProps) => {
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(`.${styles.card}`);
    if (!(card instanceof HTMLElement)) return;

    setCardWidth(card.offsetWidth + 16);
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target instanceof HTMLElement) {
          setCardWidth(entry.target.offsetWidth + 16);
        }
      }
    });
    if (card) resizeObserver.observe(card);

    return () => resizeObserver.disconnect();
  }, []);

  const scrollAmount = () => cardWidth;

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

  return { handleNext, handlePrev };
};

export default useCarousel;
