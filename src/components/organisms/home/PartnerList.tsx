import { IHomePartners } from "@/shared/data/consts/homePage/homePageContent";
import React from "react";
import PartnerCard from "../../molecules/PartnerCard";
import Partner from "../Partner";

const PartnerList = ({ partners }: { partners: IHomePartners[] }) => {
  // Duplicate partners for smooth infinite scroll
  const scrollingPartners = [...partners, ...partners];

  return (
    <Partner partnersCount={partners.length}>
      {scrollingPartners.map((partner, index) => (
        <PartnerCard partner={partner} key={index} />
      ))}
    </Partner>
  );
};

export default PartnerList;
