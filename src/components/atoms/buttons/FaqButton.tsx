import Button from "../../../shared/ui/Button";
import styles from "@/components/styles/FAQ.module.scss";

interface FaqButtonProps {
  question: string;
  isOpen: boolean;
  onClick: () => void;
  ariaControls: string;
}

const FaqButton: React.FC<FaqButtonProps> = ({
  question,
  isOpen,
  onClick,
  ariaControls,
}) => {
  return (
    <Button
      className={styles.questionButton}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={ariaControls}
    >
      <span className="text-md">{question}</span>
      <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
    </Button>
  );
};

export default FaqButton;
