import React from "react";
import { ContactInfo as IContactInfo } from "@/shared/data/consts/contactPage/contactPageData";
import ContactTitle from "../../atoms/contact/ContactTitle";
import ContactRow from "./ContactRow";

interface ContactInfoProps {
  info: IContactInfo;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ info }) => {
  return (
    <div className="flex flex-col gap-6 items-center bg-(--color-bg-section) py-12 px-4 mx-auto rounded-2xl shadow-md">
      <ContactTitle title="Our contact details" />

      <div className="w-full max-w-xl grid max-[420px]:grid-cols-1 max-[420px]:justify-items-center grid-cols-2 gap-y-4">
        {Object.entries(info).map(([key, value]) => (
          <ContactRow
            key={key}
            label={key === "workHours" ? "Work hours" : key}
            value={value}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
