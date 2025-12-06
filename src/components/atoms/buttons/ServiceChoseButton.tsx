"use client";
import React from "react";
import Button from "../../../shared/ui/Button";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/context/modalStore";

const ServiceChoseButton = ({ slug }: { slug: string }) => {
  const { close } = useModalStore();
  const router = useRouter();

  const handleClick = () => {
    close("configuratorModel"); // declanșăm tranziția de închidere
    setTimeout(() => {
      router.push(`/services/${slug}/configurator/features`);
    }, 300); // aceeași durată ca tranziția
  };

  return (
    <Button
      href={`/services/${slug}/configurator/features`}
      variant="primary"
      onClick={handleClick}
    >
      Chose
    </Button>
  );
};

export default ServiceChoseButton;
