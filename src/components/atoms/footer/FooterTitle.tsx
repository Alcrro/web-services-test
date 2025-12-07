import style from "@/components/styles/footerTitle.module.scss";
import Title from "@/shared/ui/Title";
const FooterTitle = ({ title }: { title: string }) => {
  return (
    <Title as={"h4"} className={`${style.li}`}>
      {title}
    </Title>
  );
};

export default FooterTitle;
