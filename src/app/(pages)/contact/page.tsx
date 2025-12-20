import ContactForm from "@/components/molecules/contact/ContactForm";
import ContactHero from "@/components/molecules/contact/ContactHero";
import ContactInfo from "@/components/molecules/contact/ContactInfo";
import ContactTrust from "@/components/molecules/contact/ContactTrust";
import DefaultLayout from "@/components/templates/defaultLayout/DefaultLayout";
import { buildSEO } from "@/lib/seo/seo.utils";
import { contactPageData } from "@/shared/data/consts/contactPage/contactPageData";
import { contactSEO } from "@/shared/data/seo/contactSEO";
import { Metadata } from "next";

export async function getMetadata(): Promise<Metadata> {
  return {
    ...buildSEO(contactSEO),
  };
}
const page = () => {
  const { hero, form, contactInfo, trust } = contactPageData;
  return (
    <DefaultLayout>
      <main className="flex flex-col gap-8 py-4">
        <section aria-labelledby="contact-hero">
          <ContactHero hero={hero} />
        </section>
        <section aria-labelledby="contact-trust">
          <ContactTrust trust={trust} />
        </section>
        <section
          aria-labelledby="contact-form"
          id="form"
          className="scroll-mt-5"
        >
          <ContactForm form={form} />
        </section>
        <section aria-labelledby="contact-info">
          <ContactInfo info={contactInfo} />
        </section>
      </main>
    </DefaultLayout>
  );
};

export default page;
