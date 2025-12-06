import Description from "@/shared/ui/Description";
import React from "react";

const TrustContactFeedback = ({ feedback }: { feedback: string }) => {
  return <Description className="max-w-80">{feedback}</Description>;
};

export default TrustContactFeedback;
