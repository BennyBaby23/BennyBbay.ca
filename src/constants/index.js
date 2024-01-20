import {
  entre,
  backend,
  pHealth,
  web,
  javascript,
  azure,
  html,
  Csharp,
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
  tim,
  rec,
  weather,
  calculator,
  bmi,
  threejs, shopping,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
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
    name: "Azure",
    icon: azure,
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
  },  {
    name: "C#",
    icon: Csharp,
  }
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
      "Provides information to customers by verifying understanding of request; answering questions; offering assistance.",
      "Initiates service by recording requests; forwarding to dispatching.",
      "Improves quality results by evaluating processes; recommending changes.",
    ],
  },
  {
    title: "Team Member",
    company_name: "Tim Hortons",
    icon: tim,
    iconBg: "#ffffff",
    date: "April 2021 - October 2021",
    points: [
      "Serve customers hot and cold drinks ,pastries and provide them a good customers service.",
      "Cleaning of the production area and back of the house area on a daily basis.",
      "Promptly executes service recovery for any Guest concerns or complaints by making it right with the Guest.",
    ],
  },
  {
    title: "Kitchen Staff",
    company_name: "The Rec Room - Cineplex",
    icon: rec,
    iconBg: "#000000",
    date: "February 2021 - April 2021",
    points: [
      "Cleaning all work stations, cooking equipment, and food storage areas in accordance with food safety regulations.",
      "chopping, shredding, and grating ingredients for subsequent use by the chef.",
      "Assisting with the unloading of deliveries.",
      "Storing ingredients according to prescribed food safety regulations.",
      "Team work with co-worker",
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
    name: "Weather App",
    description:
      "Web-based platform that allows users to check weather of a place. Responsive React-based weather app, delivering real-time weather updates with an intuitive interface. Plan your day with hourly and daily forecasts, explore interactive maps, and personalize settings for a tailored weather experience. With its user-friendly design and accurate data sourced from a reliable API, WeatherNow is your go-to companion for staying informed about the weather, anytime and anywhere.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      }, {
        name: "WeatherAPI",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/BennyBaby23/SysProjectWeatherApp",
    deploy_link: "https://weattherappcomp3006.netlify.app/",
  },
  {
    name: "Soccer Calculater",
    description:
      "Soccer theme based Smart mobile calculator app built with Kotlin, combining precision, a history tracker, and customizable features, CalcMate offers a seamless and personalized calculation experience. Its responsive design ensures smooth performance on Android devices, making it the go-to solution for users seeking efficiency and accuracy in their daily calculations.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/BennyBaby23/SoccerCalculatorApi",
    deploy_link: "https://github.com/BennyBaby23/SoccerCalculatorApi"
  },
  {
    name: "BMI Calculator",
    description:
      "BMI Pro is a user-friendly mobile app, crafted with Kotlin, to effortlessly calculate and track Body Mass Index (BMI). With quick BMI assessments, personalized profiles, and insightful health tips, BMI Pro empowers users to make informed decisions about their well-being. The app's seamless experience on Android ensures it's a practical and accessible health companion for individuals and families.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: bmi,
    source_code_link: "https://github.com/BennyBaby23/BMICalculator",
    deploy_link: "https://github.com/BennyBaby23/BMICalculator",
  },
  {
    name: "Shooping Website using C#",
    description:
      "Develop a dynamic shopping website using C# and ASP.NET, incorporating a modern frontend framework for an engaging user interface. Utilize HTML, CSS, and JavaScript for frontend development, ensuring a responsive and interactive shopping experience. Leverage C# and ASP.NET for backend development, following the MVC architectural pattern for a well-organized codebase. Integrate a robust database, such as SQL Server, using Entity Framework for efficient data management.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "SQL SERVER",
        color: "green-text-gradient",
      },
      {
        name: "HTML,CSS",
        color: "pink-text-gradient",
      },
    ],
    image: shopping,
    source_code_link: "https://github.com/BennyBaby23/FinalProjectCSharp?tab=readme-ov-file",
    deploy_link: "https://github.com/BennyBaby23/FinalProjectCSharp?tab=readme-ov-file",
  },
];

export { services, technologies, experiences, testimonials, projects };
