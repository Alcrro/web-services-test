import React, { FC } from "react";
import FooterTitle from "../../atoms/footer/FooterTitle";
import FooterContact from "./FooterContact";
import FooterSocials from "./FooterSocials";
import { IFooterData } from "@/shared/data/consts/footer/footerData";

interface FooterColumnProps {
  item: IFooterData;
}
const FooterColumn: FC<FooterColumnProps> = ({ item }) => {
  return (
    <div className="flex flex-col gap-2 text-center">
      <FooterTitle title={item.title} />

      {item.title === "contact" && <FooterContact items={item.children} />}
      {item.title === "socials" && <FooterSocials items={item.children} />}
    </div>
  );
};

export default FooterColumn;
