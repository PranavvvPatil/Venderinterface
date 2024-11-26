export type item = {
  id: number;
  title: string;
  link: string;
};
export type footerDetailsProps = {
  id: number;
  title: string;
  items: item[];
};

export const footerDetails: footerDetailsProps[] = [
  {
    id: 1,
    title: "About",
    items: [
      { id: 1, title: "Blog", link: "../blog" },
      { id: 2, title: "Announcements", link: "" },
      { id: 3, title: "Reviews", link: "" },


    ],
  },
  {
    id: 2,
    title: "Support",
    items: [
      { id: 1, title: "Help + FAQ’S", link: "../account/help" },
      { id: 2, title: "Track your order", link: "../account/orders" },
      { id: 3, title: "Shipping", link: "" },
      { id: 4, title: "Returns", link: "" },
      { id: 5, title: "Contact support", link: "./contact-us" },
    ],
  },
  {
    id: 3,
    title: "Get In Touch",
    items: [
      { id: 1, title: "+91 7876209548 ", link: "" },
      { id: 2, title: "shopyournursary@gmail.com", link: "" },
    ],
  },

];
