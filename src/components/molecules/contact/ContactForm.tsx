import {
  contactPageData,
  ContactForm as IContactForm,
} from "@/shared/data/consts/contactPage/contactPageData";
import React from "react";
import FormVariantsV2 from "../../organisms/FormVariantsV2";

const ContactForm = ({ form }: { form: IContactForm }) => {
  return (
    <FormVariantsV2
      fields={form.fields}
      submitText={contactPageData.form.submitText}
      note={contactPageData.form.note}
      variant="two-columns"
    />
  );
};

export default ContactForm;
