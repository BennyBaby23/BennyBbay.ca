import {
  entre,
  backend,
  pHealth,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  georgian1,
  HBEC,
  sienna,
  gao,
  georgian,
  mosaic,
  loblaw,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [ 
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Entrepreneur",
    icon: entre,
  },
  {
    title: "Strategic Innovator",
    icon: backend,
  },{
    title: "Public Health Helper",
    icon: pHealth,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer / Entrepreneur",
    company_name: "Henry Bernick Entrepreneurship Centre",
    icon: HBEC,
    iconBg: "#004a87",
    date: "August 2023 - Present 2023",
    points: [
      "Working on small business idea SellYourSkills.",
      "Developing web and app platform for the venture using SDLC, tools like VS code, android studio Vercel, CI/CD PIPELINE, languages React JS Kotlin Java.",
      "SellYourSkill is an innovative venture that aims to revolutionize the education industry by providing skills and a platform for people to sell their skills online to leverage their time.",
      "Managed a $5000 investment budget, implementing into the business Startup.",
    ],
  },
  {
    title: "Lead Concierge",
    company_name: "Sienna Senior Living",
    icon: sienna,
    iconBg: "#e15206",
    date: "July 2022 - Present",
    points: [
      "Engaged in friendly conversations and complete end-of-day reporting and balanced registers to maintain financial accuracy. Coordinating resident's audits with the office manager",
      "Reply to countless emails and calls. coordinate with other staff to maintain a satisfactory standard environment for 200+ residents in the establishment. Demonstrate excellent customer service skills.",
      "Promoting excellent customer service in all personal interactions with visitors, families, residents and team members.",
      "Providing clerical and computer support to all managers as requested.",
      "Completing required records to support cash transactions related to the sale of guest and team member meal vouchers / tickets.",
    
    ],
  },
  {
    title: "Open Educational Research",
    company_name: "Georgian College Research & Innovation",
    icon: georgian,
    iconBg: "#ffffff",
    date: "August 2022 - July 2023",
    points: [
      "Questions or concerns about copyright & licensing.",
      "Making Student books using pressbooks.",
      "Copyright & AODA Compliance audits.",
      "Creating interactive website for Library and Academic Success.",
      "Participate in training related to OER, open licensing & AODA/accessibility principles",
      "Prepare basic slide decks (PowerPoint/Google Slides) to accompany existing OER textbook materials that meet AODA & Open Licensing principles",
      "Create H5P activities (interactive web-based)",
      "Conduct quality control checks on OER materials (link checking, basic accessibility principles) Enhance existing OER with accessibility features.",
      "Prepare digital course packs for faculty in Pressbooks or other web-formats",
      "Communicate effectively with team members and faculty",
      "Contribute to efforts to promote OER at Georgian",
    ],
  },
  {
    title: "Student Ambassador",
    company_name: "Georgian College",
    icon: georgian1,
    iconBg: "#004a87",
    date: "Nov 2022 - Feb 2023 & Aug 2022 - Oct 2022",
    points: [
      "Student Ambassadors are leaders and role models on campus who introduce student life and represent the university as a positive, inclusive, and dynamic learning and living environment.",
      
    ],
  },{
    title: "Software Developer",
    company_name: "GAOTek Inc",
    icon: gao,
    iconBg: "#ffffff",
    date: "October 2022 - February 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },{
    title: "Brand Ambassador",
    company_name: "Mosaic North America",
    icon: mosaic,
    iconBg: "#021d4c",
    date: "October 2022 - January 2023",
    points: [
      "Interacting with our customers and potential investors on the phone, online, and in-person. Primary task is to ensure the brand is consistently displayed and accessible to our target market. Ensure the brand is viewed positively.",
    ],
  },
  {
    title: "Customer Service Clerk",
    company_name: "Loblaw Companies Limited",
    icon: loblaw,
    iconBg: "#ffffff",
    date: "October 2022 - January 2023",
    points: [
      "Responsible for resolving client issues, providing high-quality customer service.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
