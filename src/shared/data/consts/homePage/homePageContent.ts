export const homePageContent: IHomePageContent = {
  hero: {
    title:
      "We build websites, applications, and scripts at a professional level",
    subtitle: "Fast, scalable services tailored to your business.",
    cta: {
      primary: { text: "Request a free quote", link: "/contact" },
      secondary: { text: "View our services", link: "/services" },
    },
    image: "/images/hero-showcase2.jpg",
  },

  services: [
    {
      name: "Web Development",
      description:
        "Site-uri de prezentare, e-commerce, bloguri și platforme personalizate.",
      icon: "FaGlobe",
      link: "/services/web",
    },
    {
      name: "App Development",
      description: "Aplicații web și mobile pentru Android și iOS.",
      icon: "FaMobileAlt",
      link: "/services/app",
    },
    {
      name: "Scripts & Automatizări",
      description: "Automatizări, API integrations, bots și tool-uri custom.",
      icon: "FaCogs",
      link: "/services/scripts",
    },
  ],

  benefits: [
    { title: "Performance & Security", icon: "FaLock" },
    { title: "Modern & Responsive Design", icon: "FaLaptopCode" },
    { title: "Long-Term Scalability", icon: "FaChartLine" },
    { title: "Support & Maintenance", icon: "FaHeadset" },
  ],
  portfolio: {
    title: "Portfolio",
    projects: [
      {
        name: "E-commerce Shop",
        image: "/images/portfolio/ecommerce.png",
        link: "#",
      },
      {
        name: "CRM Application",
        image: "/images/portfolio/crm.png",
        link: "#",
      },
      {
        name: "Automation Script",
        image: "/images/portfolio/script.png",
        link: "#",
      },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    reviews: [
      {
        name: "Andrei Popescu",
        role: "Founder",
        text: "Working with this team was a game-changer. Fast delivery, great communication, and a solid final product.",
        image: "/images/testimonials/andrei.jpg",
      },
      {
        name: "Maria Ionescu",
        role: "Marketing Manager",
        text: "They understood our needs perfectly and delivered a beautiful, functional website that boosted our sales.",
        image: "/images/testimonials/maria.png",
      },
      {
        name: "Andrei Popescu",
        role: "Founder",
        text: "Working with this team was a game-changer. Fast delivery, great communication, and a solid final product.",
        image: "/images/testimonials/andrei.jpg",
      },
      {
        name: "Maria Ionescu",
        role: "Marketing Manager",
        text: "They understood our needs perfectly and delivered a beautiful, functional website that boosted our sales.",
        image: "/images/testimonials/maria.png",
      },
      {
        name: "Andrei Popescu",
        role: "Founder",
        text: "Working with this team was a game-changer. Fast delivery, great communication, and a solid final product.",
        image: "/images/testimonials/andrei.jpg",
      },
      {
        name: "Maria Ionescu",
        role: "Marketing Manager",
        text: "They understood our needs perfectly and delivered a beautiful, functional website that boosted our sales.",
        image: "/images/testimonials/maria.png",
      },
    ],
  },

  process: {
    title: "How We Work",
    steps: [
      {
        number: "1",
        title: "Initial Consultation",
        description:
          "We discuss your needs and goals to understand the direction of the project.",
        icon: "FaComments",
      },
      {
        number: "2",
        title: "Planning & Quote",
        description:
          "We present a clear plan and a personalized offer, with no hidden costs.",
        icon: "FaClipboardList",
      },
      {
        number: "3",
        title: "Design & Development",
        description:
          "We build your solution using modern technologies and best practices.",
        icon: "FaCode",
      },
      {
        number: "4",
        title: "Testing & Launch",
        description:
          "We carefully test everything and launch the project under optimal conditions.",
        icon: "FaRocket",
      },
      {
        number: "5",
        title: "Support & Growth",
        description:
          "We provide maintenance and help you scale as your business evolves.",
        icon: "FaHandsHelping",
      },
    ],
  },
  partners: [
    {
      name: "alexandru roventa",
      logo: "/images/partners/netflix.png",
      link: "https://alexandru-roventa.ro",
    },
    {
      name: "lucruri utile",
      logo: "",
      link: "https://lucruri-utile.ro",
    },
  ],

  faq: [
    {
      question: "How long does a project take?",
      answer:
        "It depends on the complexity, but typical projects take 2–8 weeks.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer support and maintenance packages tailored to your needs.",
    },
    {
      question: "Can you work with existing websites?",
      answer:
        "Absolutely, we can improve, migrate, or extend existing projects.",
    },
  ],
};

export interface IHomePageContent {
  hero: IHomeHero;
  services: IHomeService[];
  portfolio: IHomePortfolio;
  benefits: IHomeBenefits[];
  testimonials: IHomeTestimonial;
  process: IHomeProcess;
  partners: IHomePartners[];
  faq: IHomeFAQ[];
}

export interface IHomeHero {
  title: string;
  subtitle: string;
  cta: {
    primary: { text: string; link: string };
    secondary: { text: string; link: string };
  };
  image: string;
}

export interface IHomeService {
  name: string;
  description: string;
  icon: string;
  link: string;
}

export interface IHomePortfolio {
  title: string;
  projects: IPortfolioProjects[];
}

interface IPortfolioProjects {
  name: string;
  image: string;
  link: string;
}

export interface IHomeTestimonial {
  title: string;
  reviews: ITestimonialReview[];
}

export interface ITestimonialReview {
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface IHomeProcess {
  title: "How We Work";
  steps: IProcessSteps[];
}

export interface IProcessSteps {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface IHomeBenefits {
  title: string;
  icon: string;
}

export interface IHomePartners {
  name: string;
  logo: string;
  link?: string;
}

export interface IHomeFAQ {
  question: string;
  answer: string;
}
