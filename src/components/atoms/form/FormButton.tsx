// atoms/buttons/FormButton.tsx
import React, { FC } from "react";

interface FormButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit";
}

const FormButton: FC<FormButtonProps> = ({
  text,
  className,
  type = "submit",
}) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};

export default FormButton;
