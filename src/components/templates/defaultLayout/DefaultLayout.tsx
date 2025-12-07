import { ReactNode } from "react";
import style from "../../styles/defaultLayout.module.scss";
import Footer from "@/components/organisms/Footer";
import PublicHeader from "@/components/organisms/PublicHeader";
import Head from "next/head";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        {/* Preconnect pentru fonturi */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={style.mainContent}>
        <PublicHeader />
        <div className={`${style.main} flex-1 px-2`}>{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default DefaultLayout;
