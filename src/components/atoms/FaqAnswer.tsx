"use client";
import React from "react";
import styles from "@/components/styles/FAQ.module.scss";

interface FaqAnswerProps {
  answer: string;
  isOpen: boolean;
  id: string;
}

const FaqAnswer: React.FC<FaqAnswerProps> = ({ answer, isOpen, id }) => (
  <div
    id={id}
    className={`${styles.answer} ${isOpen ? styles.open : ""}`}
    role="region"
    aria-hidden={!isOpen}
  >
    {answer}
  </div>
);

export default FaqAnswer;
