import { ServiceCtaSection } from "@/shared/data/consts/servicePage/servicePageContent";
import Title from "@/shared/ui/Title";
import ServiceCtaButton from "../../atoms/buttons/ServiceCtaButton";

const ServiceCta = ({ cta }: { cta: ServiceCtaSection }) => {
  return (
    <>
      <Title as="h2" className="text-4xl font-bold mb-4">
        {cta.title}
      </Title>
      <ServiceCtaButton href={cta.button.href} text={cta.button.text} />
    </>
  );
};

export default ServiceCta;
