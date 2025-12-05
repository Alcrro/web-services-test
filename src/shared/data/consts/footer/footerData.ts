import { FaSlack, FaInstagram, FaTeamspeak, FaDiscord } from "react-icons/fa";

export const footerData: IFooterData[] = [
  {
    id: 0,
    title: "alcrro",
    children: [],
  },
  {
    id: 1,
    title: "support",
    children: [{ id: 0, name: "blabla", link: "dadwda" }],
  },
  {
    id: 2,
    title: "contact",
    children: [{ id: 0, name: "email", value: "alex.roventa94@gmail.com" }],
  },
  {
    id: 3,
    title: "socials",
    children: [
      {
        id: 0,
        name: "slack",
        link: "https://join.slack.com/t/appdeveloperhub/shared_invite/zt-3dfds8v9h-AxGveNG5F4abwjNnzq01ig",
      },
      {
        id: 1,
        name: "microsoft-teams",
        link: "#",
      },

      {
        id: 2,
        name: "discord",
        link: "https://discord.gg/cmHpexcz",
      },
      {
        id: 3,
        name: "instagram",
        link: "https://instagram.com/_alcrro_",
      },
    ],
  },
];

export const iconsMap: Record<string, React.ElementType> = {
  slack: FaSlack,
  instagram: FaInstagram,
  "microsoft-teams": FaTeamspeak,
  discord: FaDiscord,
};

export interface IFooterData {
  id: number;
  title: string;
  children: IFooterChildren[];
}

export interface IFooterChildren {
  id: number;
  name: string;
  link?: string;
  value?: string;
}
