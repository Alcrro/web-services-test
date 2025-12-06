import { Plus } from "lucide-react";
import React, { ReactNode } from "react";

const Feature = ({
  feature,
  children,
}: {
  feature: string;
  children: ReactNode;
}) => {
  return (
    <>
      <Plus className="text-green-500 size-4" />
      {children}
      <span className="text-sm mt-1">{feature}</span>
    </>
  );
};

export default Feature;
