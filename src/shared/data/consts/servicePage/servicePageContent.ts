// commons/consts/services/servicesPageContent.ts

export const servicesPageContent: ServicesPageContent = {
  hero: {
    title: "Our Services",
    subtitle:
      "Helping businesses build scalable, secure, and modern digital solutions.",
    cta: {
      text: "Get a Free Quote",
      href: "/contact",
    },
  },
  benefits: [
    {
      title: "🚀 Fast Delivery",
      description:
        "Agile workflow ensures quick turnarounds without sacrificing quality.",
    },
    {
      title: "🎯 Custom Solutions",
      description:
        "Tailored services that fit your exact business needs and goals.",
    },
    {
      title: "🔒 Secure & Scalable",
      description:
        "Enterprise-level security practices and scalable architecture.",
    },
    {
      title: "💬 Transparent Communication",
      description:
        "Stay updated at every stage with clear and open communication.",
    },
  ],
  process: {
    title: "How It Works",
    steps: [
      {
        step: 1,
        title: "Discovery",
        description: "Understanding your goals and requirements.",
      },
      {
        step: 2,
        title: "Planning",
        description: "Defining roadmap, budget, and milestones.",
      },
      {
        step: 3,
        title: "Execution",
        description: "Designing, developing, and iterating fast.",
      },
      {
        step: 4,
        title: "Delivery & Support",
        description: "Project handover with ongoing support.",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How long does a project usually take?",
        answer: "It depends on scope — most websites are done in 4–6 weeks.",
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, I offer maintenance and scaling support after launch.",
      },
      {
        question: "How do you price projects?",
        answer: "I use transparent pricing based on time and complexity.",
      },
    ],
  },
  cta: {
    title: "Ready to bring your project to life?",
    button: { text: "Let’s Work Together", href: "/contact" },
  },
};

export interface ServiceHeroSection {
  title: string;
  subtitle: string;
  cta: {
    text: string;
    href: string;
  };
}

export interface ServiceBenefitItem {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceProcessSection {
  title: string;
  steps: ServiceProcessStep[];
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceFaqSection {
  title: string;
  items: ServiceFaqItem[];
}

export interface ServiceCtaSection {
  title: string;
  button: {
    text: string;
    href: string;
  };
}

export interface ServicesPageContent {
  hero: ServiceHeroSection;
  benefits: ServiceBenefitItem[];
  process: ServiceProcessSection;
  faq: ServiceFaqSection;
  cta: ServiceCtaSection;
}
