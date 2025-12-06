import style from "@/components/styles/footerTitle.module.scss";
const FooterTitle = ({ title }: { title: string }) => {
  return <li className={`${style.li}`}>{title}</li>;
};

export default FooterTitle;
