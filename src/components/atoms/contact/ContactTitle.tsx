import Title from "@/shared/ui/Title";
import React from "react";

const ContactTitle = ({ title }: { title: string }) => {
  return (
    <Title as="h1" className="title text-3xl">
      {title}
    </Title>
  );
};

export default ContactTitle;
