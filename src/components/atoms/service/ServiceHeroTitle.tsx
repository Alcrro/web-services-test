import Title from "@/shared/ui/Title";

const ServiceHeroTitle = ({ title }: { title: string }) => {
  return (
    <Title
      as={"h1"}
      className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-(--color-text) "
    >
      {title}
    </Title>
  );
};

export default ServiceHeroTitle;
