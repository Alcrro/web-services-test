import { IHomePartners } from "@/shared/data/consts/homePage/homePageContent";
import React, { FC } from "react";
import style from "@/components/styles/partnerList.module.scss";
import Image from "next/image";

interface IHomePartnersProps {
  partner: IHomePartners;
}
const PartnerCard: FC<IHomePartnersProps> = ({ partner }) => {
  const linkString = (link: string): string => {
    const linkStr = link.replace(/(\.\w{2,}|[^\/\s]+\/+)/g, "");
    return linkStr;
  };
  return (
    <div className={`${style.marquee_item}`}>
      {!partner.logo && partner.link ? (
        <div>{linkString(partner.link)}</div>
      ) : (
        <Image
          src={partner.logo}
          alt={partner.name}
          width={160}
          height={60}
          className="object-contain"
        />
      )}
      <div className="mt-2 text-center">{partner.name}</div>
    </div>
  );
};

export default PartnerCard;
