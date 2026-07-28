export type JobEntry = {
  company: string;
  logo: string;
  duration: string;
  dateRange: string;
};

// Recent, product-design era — most recent first in the data, but rendered
// left to right in chronological order (oldest of this era on the left).
export const productDesignJobs: JobEntry[] = [
  {
    company: "Junglee Games",
    logo: "/images/logo-junglee.svg",
    duration: "3Y 6M",
    dateRange: "2023 - Present",
  },
  {
    company: "Vahak",
    logo: "/images/logo-vahak.svg",
    duration: "9M",
    dateRange: "2022 - 2022",
  },
  {
    company: "Prodios Labs",
    logo: "/images/logo-prodios.svg",
    duration: "1Y 4M",
    dateRange: "2020 - 2022",
  },
];

export const graphicDesignerNote =
  "Former graphic designer (4 yrs) — where I learned to make things look good before making them work great";

// Earlier, graphic-design era. Rendered right to left: SmartWorks (most
// recent within this era) sits on the right, Prodios Labs (the very start
// of the career) sits on the left, capped by a "stop" marker.
export const graphicDesignJobs: JobEntry[] = [
  {
    company: "SmartWorks",
    logo: "/images/logo-smartworks.svg",
    duration: "1Y",
    dateRange: "2018 - 2019",
  },
  {
    company: "Possible",
    logo: "/images/logo-possible.svg",
    duration: "1Y",
    dateRange: "2017 - 2018",
  },
  {
    company: "MyAnatomy",
    logo: "/images/logo-myanatomy.svg",
    duration: "1Y",
    dateRange: "2016 - 2017",
  },
  {
    company: "Prodios Labs",
    logo: "/images/logo-prodios-graphic.svg",
    duration: "1Y",
    dateRange: "2015 - 2016",
  },
];
