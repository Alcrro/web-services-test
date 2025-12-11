// 📁 src/data/seo/portfolio-seo.ts
export const portfolioSEO = {
  title: "Web Development & App Projects | Portfolio | YourCompany",
  description:
    "Explore our portfolio of web development, app development, and automation projects. From e-commerce websites to CRM systems, we deliver fast, modern, and scalable solutions.",
  keywords: [
    "web development portfolio",
    "app development projects",
    "Next.js portfolio",
    "e-commerce website examples",
    "custom CRM application",
    "business automation scripts",
    "full-stack development portfolio",
    "YourCompany portfolio",
  ],
  openGraph: {
    title: "Portfolio | Web & App Development Projects | YourCompany",
    description:
      "Browse our latest web and mobile app projects built with modern technologies like Next.js, Express.js, and AWS.",
    url: "https://yourcompany.com/portfolio",
    type: "website",
    images: [
      {
        url: "https://yourcompany.com/images/og/portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "YourCompany portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | Web & App Development Projects",
    description:
      "Discover successful web and app development projects by YourCompany. Modern, scalable, and tailored to your business needs.",
    images: ["https://yourcompany.com/images/og/portfolio.jpg"],
  },
};
