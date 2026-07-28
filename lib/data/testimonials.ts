export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "rahul-dhyawala",
    quote:
      "Navneet’s motion framework transformed how we think about UX consistency. The engagement metrics speak for themselves",
    name: "Rahul Dhayawala",
    title: "Head of Design - Junglee Games",
    avatar: "/images/avatar-rd.png",
  },
  {
    id: "saiyam-surana",
    quote:
      "The icon system Navneet built became the foundation for all our products. Clean, scalable and beautifully crafted",
    name: "Saiyam Surana",
    title: "Product Manager - Junglee Games",
    avatar: "/images/avatar-ss.png",
  },
  {
    id: "salman-majeed",
    quote:
      "Working with Navneet was a game-changer. His attention to motion details and system thinking elevated our entire product",
    name: "Salman Majeed",
    title: "UX Manager, Junglee Games",
    avatar: "/images/avatar-sm.png",
  },
  {
    id: "vikash-chandrawat",
    quote:
      "What stood out most was his problem-first mindset. Before jumping into visuals, Navneet always ensured we were solving the right user pain point, which saved us time and improved outcomes",
    name: "Vikash Chandrawat",
    title: "Co Founder, Vahak",
    avatar: "/images/avatar-vc.png",
  },
  {
    id: "rahul-chaterjee",
    quote: "Navneet truly listens to users and translates insights into practical, impactful experiences",
    name: "Rahul Chaterjee",
    title: "Project Manager, Vahak",
    avatar: "/images/avatar-rc.png",
  },
  {
    id: "vj",
    quote:
      "Navneet always keeps a balance between user’s expectations and business goals. He also asks product questions people generally avoid..",
    name: "VJ",
    title: "Sr. Product Designer, Vahak",
    avatar: "/images/avatar-vj.png",
  },
  {
    id: "asim-khan",
    quote:
      "Non has the ability to deliver even under tight dead-lines with thoughtful, polished experiences through rapid iteration",
    name: "Asim Khan",
    title: "Product Designer, Prodios Labs",
    avatar: "/images/avatar-ak.png",
  },
  {
    id: "rajkamal-bauri",
    quote:
      "He asks me anywhere near as many questions as he used to, thank you and it's super helpful to get reliable opinions about what we should do to address problems in a way that's best for our users, rather than what's easiest, or best for us.",
    name: "Rajkamal Bauri",
    title: "Co Founder, Prodios Labs",
    avatar: "/images/avatar-rk.png",
  },
  {
    id: "swapnil-suman",
    quote:
      "He always backed design decisions with data. This ability to translate insights into clear UX improvements consistently drove better user engagement and measurable results",
    name: "Swapnil Suman",
    title: "Product Analyst, Prodios Labs",
    avatar: "/images/avatar-swap.png",
  },
];
