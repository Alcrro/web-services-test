import { IHomeFAQ } from "@/shared/data/consts/homePage/homePageContent";
import styles from "@/components/styles/FAQ.module.scss";
import HomeFaqTitle from "../../atoms/home/HomeFaqTitle";
import FaqItem from "@/components/molecules/FaqItem";

interface FAQProps {
  faq: IHomeFAQ[];
}

const FAQ: React.FC<FAQProps> = ({ faq }) => {
  return (
    <div className={styles.faqSection} aria-label="Frequently Asked Questions">
      <HomeFaqTitle />
      <ul className={styles.faqList}>
        {faq.map((item, index) => {
          const strIndex = String(index);
          return <FaqItem faq={item} index={strIndex} key={strIndex} />;
        })}
      </ul>
    </div>
  );
};

export default FAQ;
