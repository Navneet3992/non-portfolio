export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  year: string;
  type: string;
  cardColor: "teal" | "dark" | "orange" | "red";
  cardImage?: string;
  heroImage?: string;
  deliverables: string[];
  role: string[];
  team: string[];
  stats: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "free-cash-table",
    tag: "JUNGLEE RUMMY",
    title: "Designing a Zero-Risk Path to Real Cash Wins for New Rummy Players",
    year: "2025",
    type: "UX / Motion",
    cardColor: "teal",
    cardImage: "/images/case-study-1-card.png",
    heroImage: "/images/hero-free-cash-table.png",
    deliverables: ["Design, Visuals, User Flows", "Lottie Animations", "High Fidelity Designs"],
    role: ["UX Lead - Interaction", "Motion Design"],
    team: ["Product Designers", "Product Managers", "Developers (Mobile)", "Stakeholders"],
    stats: [
      {
        label: "in average sessions per user among free-table-only players",
        value: "+22%",
      },
      {
        label:
          "in average session duration (users stayed longer once real stakes were introduced without risk)",
        value: "+17% increase",
      },
      {
        label: "tried at lease one Free Cash Table",
        value: "+38% of eligible new users",
      },
      {
        label: "in wallet page visit from new users",
        value: "+21% increase",
      },
      {
        label:
          "who won real cash on Free Cash Tables went on to explore paid cash tables within the same week",
        value: "1 in 4 users",
      },
      {
        label:
          "A 20% relative uplift in conversion within just two weeks in First - time Cash deposit",
        value: "~5% to 10% increase in Deposit",
      },
    ],
  },
  {
    slug: "jr-player-search",
    tag: "JUNGLEE RUMMY",
    title: 'Fixing the Wait that made Players wonder, "Is this Real?"',
    year: "2024",
    type: "UX / Motion",
    cardColor: "dark",
    cardImage: "/images/case-study-2-card.png",
    heroImage: "/images/hero-jr-player-search.png",
    deliverables: ["Design, Visuals, User Flows", "Unity Animation Assets", "High Fidelity Designs"],
    role: ["UX Lead - Interaction", "UI Design", "Motion Design"],
    team: ["Product Designers", "Product Managers", "Unity Developers (Mobile)", "Stakeholders"],
    stats: [
      { label: "Reduction in perceived wait", value: "-40%" },
      { label: "Drop-off during matchmaking", value: "-18%" },
    ],
  },
  {
    slug: "motion-framework",
    tag: "JUNGLEE RUMMY",
    title:
      "Elevating interactions with a Scalable Motion System blending Function, Emotion, and Delight",
    year: "2025",
    type: "Motion Design",
    cardColor: "orange",
    cardImage: "/images/case-study-3-card.png",
    heroImage: "/images/hero-motion-framework.gif",
    deliverables: ["Interaction Libraries", "Lottie Animations"],
    role: ["Motion Design", "UX Design - Interaction"],
    team: ["Product Designers", "Developers (Mobile)", "Stakeholders"],
    stats: [
      { label: "Components covered", value: "40+" },
      { label: "Faster motion QA", value: "+50%" },
    ],
  },
  {
    slug: "howzat-login",
    tag: "HOWZAT",
    title: "Designing for Clarity - Reimagining HOWZAT's Splash & Login Experience",
    year: "2025",
    type: "UX / Motion",
    cardColor: "red",
    cardImage: "/images/case-study-4-card.png",
    heroImage: "/images/hero-howzat-login.png",
    deliverables: ["Component Libraries", "Lottie Animations"],
    role: ["UI Design", "UX Design - Interaction", "Motion Design"],
    team: ["Product Designers", "Developers (Mobile)", "Stakeholders"],
    stats: [
      { label: "Faster time-to-login", value: "+30%" },
      { label: "Support tickets on login", value: "-25%" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const index = caseStudies.findIndex((cs) => cs.slug === slug);
  return caseStudies[(index + 1) % caseStudies.length];
}
