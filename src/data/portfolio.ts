export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  about: string;
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  experience: Experience[];
}

export const portfolioData: PortfolioData = {
  name: "Đỗ Cao Minh",
  role: "Frontend Developer",
  tagline: "I bridge the gap between raw data and impactful public policy.",
  about: "Hello! I am Đỗ Cao Minh, a Development Economics student at the University of Economics and Business (UEB). My academic journey is fueled by a passion for bridging the gap between rigorous data analysis and impactful public policy. With a strong foundation in economic theories and hands-on experience in data analytics tools like Power BI and Excel, I focus on translating complex datasets into actionable insights that address development challenges and drive sustainable growth. I believe that data is not just numbersit is a powerful tool to shape better decisions and build a better society.",
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Figma"],
    },
  ],
  projects: [
    {
      title: "Project One",
      description: "A high-performance web application built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
    },
    {
      title: "Project Two",
      description: "An interactive dashboard with complex data visualization.",
      tech: ["React", "D3.js", "TypeScript"],
      link: "https://demo.com",
    },
  ],
  experience: [
    {
      company: "SSI Securities Corporation",
      role: "Frontend Developer Intern",
      period: "2023 - 2024",
      description: "Worked on high-traffic financial dashboards and improved UI performance.",
      achievements: [
        "Optimized React components for large data sets.",
        "Collaborated with UI/UX designers to implement new features.",
        "Built reusable UI components for the internal design system.",
      ],
    },
  ],
};
