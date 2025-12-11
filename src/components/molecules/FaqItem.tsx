"use client";
import { IHomeFAQ } from "@/shared/data/consts/homePage/homePageContent";
import FaqButton from "../atoms/buttons/FaqButton";
import FaqAnswer from "../atoms/FaqAnswer";
import { useModalStore } from "@/context/modalStore";

interface FaqItemProps {
  faq: IHomeFAQ;

  index: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, index }) => {
  const { modals, toggle } = useModalStore((store) => store);
  const isOpen = !!modals[index];
  return (
    <li className="faqItem">
      <FaqButton
        question={faq.question}
        isOpen={isOpen}
        onClick={() => toggle(index)}
        ariaControls={`faq-answer-${index}`}
      />
      <FaqAnswer
        answer={faq.answer}
        isOpen={isOpen}
        id={`faq-answer-${index}`}
      />
    </li>
  );
};

export default FaqItem;
