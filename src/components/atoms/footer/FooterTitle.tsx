import style from "@/components/styles/footerTitle.module.scss";
import Description from "@/shared/ui/Description";

const FooterTitle = ({ title }: { title: string }) => {
  return (
    <Description as={"p"} className={`${style.li}`}>
      {title}
    </Description>
  );
};

export default FooterTitle;
