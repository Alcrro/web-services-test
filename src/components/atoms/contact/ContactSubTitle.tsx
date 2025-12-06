import Title from "@/shared/ui/Title";
import React from "react";

const ContactSubTitle = ({ subTitle }: { subTitle: string }) => {
  return (
    <Title as="p" className="title">
      {subTitle}
    </Title>
  );
};

export default ContactSubTitle;
