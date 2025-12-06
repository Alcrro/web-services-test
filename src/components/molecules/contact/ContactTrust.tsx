import { ContactTrust as IContactTrust } from "@/shared/data/consts/contactPage/contactPageData";
import React from "react";
import TrustContactCard from "./TrustContactCard";
import Description from "@/shared/ui/Description";

const ContactTrust = ({ trust }: { trust: IContactTrust }) => {
  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
      <Description className="description">{trust.message}</Description>
      <div className="testimonials flex max-[420px]:flex-col justify-center items-center gap-2">
        {trust.testimonials.map((item, index) => (
          <TrustContactCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactTrust;
