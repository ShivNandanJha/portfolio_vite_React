import p1 from "./assets/project1.jpeg";
import p2 from "./assets/project10.jpeg";
import p3 from "./assets/project3.jpg";
import p4 from "./assets/project4.jpeg";
import p5 from "./assets/project5.jpeg";
import p7 from "./assets/project7.jpeg";
import p9 from "./assets/project9.jpeg";
import p10 from "./assets/project11.png";
import p14 from "./assets/project14.jpeg";
import p15 from "./assets/project15.jpg";
import p16 from "./assets/project16.jpeg"; 

import project17 from "./assets/project17.png";

export const filters = [
  {
    name: "Recent",
    id: "recent",
  },
  {
    name: "HTML,CSS",
    id: "html",
  },
  {
    name: "Javascript",
    id: "javascript",
  },
  {
    name: "React",
    id: "react",
  },
];

export const projects = [
  {
    name: "Web developer personal portfolio using only basic HTML & CSS",
    image: p1,
    live_url: "https://shivi-code-portfolio.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/ShiviCode_Portfolio",
    tags: ["html", "recent"],
  },
  {
    name: "Movie searching App using react,redux,tailwind and TMDB API",
    image: p2,
    tags: ["javascript", "react", 'recent'],
    live_url: "https://movie-flix-nine-kappa.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/MovieFlix",
  },
  {
    name: "Bro_CODE blog website using nextJs, firebase, MongoDB, Prisma",
    image: p14,
    tags: ["javascript", "react", 'recent'],
    live_url: "https://brocodeblog.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/BroCode-Blog",
  },
  {
    name: "NextJS  & Tailwind CSS travel website static UI/UX design",
    image: p16,
    tags: ["react", 'recent'],
    live_url: "https://travelwebsite-brocode.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/travel_ui_ux-main",
  },

  {
    name: "TodoIt- NextJs Todo App and Google firebase for storage and authentication ",
    image: p3,
    tags: ["recent", "react", "javascript"],
    live_url: "https://next-js-todo-app-51c2.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/NextJS-Todo-App",
  },
  {
    name: "TaxiGO- Taxi booking wesbite with interactive map feature,using Mapbox and Authentication using Clerk ",
    image: p15,
    tags: ["recent", "react", "javascript"],
    live_url: "",
    github_url: "https://github.com/ShivNandanJha/taxigo",
  },
  {
    name: "Tomato - Restaurent food delivery website (Homepage)",
    image: project17,
    tags: ["React","HTML" ,"CSS"],
    live_url: "https://restaurent-delivery.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/Restaurent_delivery",
  },
  {
    name: "Netflix homepage clone using basic HTML & CSS",
    image: p4,
    tags: ["html", "recent"],
    live_url: "https://neflix-landing-page.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/netflix-landing-page-clone",
  },
  {
    name: "Starbucks homepage clone using basic HTML & CSS",
    image: p5,
    tags: ["Html", "recent"],
    live_url: "https://coffesoffee-homepage-main.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/starbucks-homepage-main",
  },
  {
    name: "Brainwiz - React Quiz App",
    image: p10,
    tags: ["react", "javascript", "recent"],
    live_url: "https://react-quiz-app-main-eta.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/react-quiz-app-main",
  },

  {
    name: "DictoGuru- Dictionary App using react, materialUI and google dictionary App",
    image: p7,
    tags: ["javascript", "react", "recent"],
    live_url: "https://dictionary-app-blue-seven.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/Dictionary_App",
  },

  {
    name: "Simple Word Editor using Javascript ",
    image: p9,
    tags: ["javascript", "html"],
    live_url: "https://wordeditor-codelab.netlify.app/",
    github_url:
      "https://github.com/ShivNandanJha/Frontend-Projects-Text_Editor",
  },

];

export const achievements = [
  {
    id: 1,
    year: 20,
    description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
  },
  {
    id: 2,
    year: 1,
    description: "YEARS OF<br />EXPERIENCE",
  },
  {
    id: 3,
    year: 10,
    description: "TECHNOLOGIES",
  },
  {
    id: 4,
    year: 70,
    description: "COMMUNITY<br />POSTS",
  },
];
