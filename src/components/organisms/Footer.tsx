import { footerData } from "@/shared/data/consts/footer/footerData";
import React from "react";
import FooterColumn from "../molecules/footer/FooterColumn";
import style from "@/components/styles/footer.module.scss";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`${style.footer}`}>
      <ul className={`${style.ul}`}>
        {footerData.map((item) => (
          <FooterColumn key={item.id} item={item} />
        ))}
      </ul>

      <div className={`${style.footer_reserved}`}>
        © {year}
        <span className="capitalize"> alcrro company</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
