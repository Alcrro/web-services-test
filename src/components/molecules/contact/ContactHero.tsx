import { ContactHeroSection } from "@/shared/data/consts/contactPage/contactPageData";
import React from "react";
import ContactTitle from "../../atoms/contact/ContactTitle";
import ContactSubTitle from "../../atoms/contact/ContactSubTitle";
import ContactButton from "../../atoms/buttons/ContactButton";

const ContactHero = ({ hero }: { hero: ContactHeroSection }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mx-auto py-8 bg-(--color-bg-section) max-w-3xl rounded-lg shadow-md text-center">
      <ContactTitle title={hero.title} />
      <ContactSubTitle subTitle={hero.subtitle} />
      <ContactButton cta={hero.cta} />
    </div>
  );
};

export default ContactHero;
