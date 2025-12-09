import DefaultLayout from "@/components/templates/defaultLayout/DefaultLayout";

import styles from "@/components/styles/aboutMe.module.scss";

import { Metadata } from "next";
import DefaultIcon from "@/shared/ui/icons/defaultIcon";
import { buildSEO } from "@/lib/seo/seo.utils";
import { aboutSEO } from "@/shared/data/seo/aboutSEO";

export const metadata: Metadata = {
  ...buildSEO(aboutSEO),
};

const About = () => {
  return (
    <DefaultLayout>
      <section className={styles.aboutMe}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>About Me</h2>
            <p>
              My passion for technology began at the age of 12, when I had my
              first interactions with a computer. By 14, I took my first steps
              into web development, modifying HTML and CSS in Adobe Dreamweaver,
              experimenting with scripts and templates for Counter-Strike 1.6
              servers. This early curiosity taught me how to combine creativity
              with logic and the importance of attention to detail in every
              project.
            </p>
            <p>
              I attended the High School of Electrotechnics and Electronics,
              where I deepened my technical foundations, and later the Faculty
              of Automation and Applied Informatics, where I studied C++ and
              Oracle, developing my programming skills and understanding of
              complex systems.
            </p>
            <p>
              Today, I combine the practical experience I have gained since
              adolescence with solid academic knowledge to provide efficient
              software solutions tailored to clients’ needs. Whether it is web
              development, application optimization, or complex automation
              projects, my approach is built on professionalism, attention to
              detail, and a passion for technology that has defined me for over
              18 years.
            </p>
            <p>
              I am always ready to turn ideas into functional projects and
              deliver value through innovation and technical expertise.
            </p>
          </div>
          <div className={styles.imageContent}>
            <div className={`${styles.imageFrame} w-20 h-20`}>
              <DefaultIcon
                src="/images/profile.png"
                alt="Alexandru Roventa"
                width={1000}
                height={1000}
                priority
                fetchPriority="high"
                aria-label="my profile image"
              />
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default About;
