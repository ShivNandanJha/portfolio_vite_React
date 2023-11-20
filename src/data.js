import p1 from "./assets/project1.jpeg";
import p2 from "./assets/project10.jpeg";
import p3 from "./assets/project3.jpg";
import p4 from "./assets/project4.jpeg";
import p5 from "./assets/project5.jpeg";
import p6 from "./assets/project6.jpeg";
import p7 from "./assets/project7.jpeg";
import p8 from "./assets/project8.jpeg";
import p9 from "./assets/project9.jpeg";
import p10 from "./assets/project11.png";
import p11 from "./assets/project2.jpeg";
import p12 from "./assets/project12.jpeg";
import p13 from "./assets/project13.jpeg";
import p14 from "./assets/project14.jpeg";
import p15 from "./assets/project15.jpg";
import p16 from "./assets/project16.jpeg";

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
    tags: ["html","recent"],
  },
  {
    name      : "Movie searching App using react,redux,tailwind and TMDB API",
    image     : p2,
    tags      : ["javascript","react",'recent'],
    live_url  : "https://movie-flix-nine-kappa.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/MovieFlix",
  },
  {
    name      : "Bro_CODE blog website using nextJs, firebase, MongoDB, Prisma",
    image     : p14,
    tags      : ["javascript","react",'recent'],
    live_url  : "https://brocodeblog.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/BroCode-Blog",
  },
  {
    name      : "NextJS  & Tailwind CSS travel website static UI/UX design",
    image     : p16,
    tags      : ["react",'recent'],
    live_url  : "https://travelwebsite-brocode.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/travel_ui_ux-main",
  },

  {
    name      : "TodoIt- NextJs Todo App and Google firebase for storage and authentication ",
    image     : p3,
    tags      : ["recent","react","javascript"],
    live_url  : "https://next-js-todo-app-51c2.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/NextJS-Todo-App",
  },
  {
    name      : "TaxiGO- Taxi booking wesbite with interactive map feature,using Mapbox and Authentication using Clerk ",
    image     : p15,
    tags      : ["recent","react","javascript"],
    live_url  : "",
    github_url: "https://github.com/ShivNandanJha/taxigo",
  },
  {
    name: "Netflix homepage clone using basic HTML & CSS",
    image: p4,
    tags: ["html","recent"],
    live_url: "https://netflix-landing-page-clone-nine.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/netflix-landing-page-clone",
  },
  {
    name: "Starbucks homepage clone using basic HTML & CSS",
    image: p5,
    tags: [ "Html","recent"],
    live_url: "https://starbuckshtml-shivcode.netlify.app/",
    github_url: "https://github.com/ShivNandanJha/starbucks-homepage-main",
  },
  {
    name      : "Brainwiz - React Quiz App",
    image     : p10,
    tags      : ["react","javascript","recent"],
    live_url  : "https://react-quiz-app-main-eta.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/react-quiz-app-main",
  },
  {
    name: "Simple Calculator using Javascript",
    image: p6,
    tags: ["javascript","html"],
    live_url: "https://calculator-topaz-sigma-76.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/Calculator",
  },
  {
    name: "DictoGuru- Dictionary App using react, materialUI and google dictionary App",
    image: p7,
    tags: ["javascript","react","recent"],
    live_url: "https://dictionary-app-blue-seven.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/Dictionary_App",
  },
  {
    name: "Simple Joke generator using javascript and Joke API",
    image: p8,
    tags: ["javascript","html"],
    live_url: "https://jokebook-shivcode.netlify.app/",
    github_url: "https://github.com/ShivNandanJha/JokeBook",
  },
  {
    name: "Simple Word Editor using Javascript ",
    image: p9,
    tags: ["javascript","html"],
    live_url: "https://wordeditor-codelab.netlify.app/",
    github_url:
      "https://github.com/ShivNandanJha/Frontend-Projects-Text_Editor",
  },
  {
    name: "iNotebook -notepad/todo javascript ",
    image: p11,
    tags: ["javascript"],
    live_url: "https://notebook-sooty.vercel.app/",
    github_url: "https://github.com/ShivNandanJha/notebook",
  },
  {
    name      : "javascript tic tac toe hame ",
    image     : p12,
    tags      : ["javascript","html"],
    live_url  : "https://tic-tac-toe-shivicode.netlify.app/",
    github_url: "https://github.com/ShivNandanJha/HTML-project-Tic-Tac-Toe",
  },
  {
    name: "Javascript hangman Game ",
    image: p13,
    tags: ["javascript","html"],
    live_url: "https://hangman-shivcode.netlify.app/",
    github_url:
      "https://github.com/ShivNandanJha/Frontend-Projects-WordGuess-Game",
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
