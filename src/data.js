import p1 from "./assets/project1.jpeg";
import p2 from "./assets/project10.jpeg";
import p3 from "./assets/project3.jpeg";
import p4 from "./assets/project4.jpeg";
import p5 from "./assets/project5.jpeg";
import p6 from "./assets/project6.jpeg";
import p7 from "./assets/project7.jpeg";
import p8 from "./assets/project8.jpeg";
import p9 from "./assets/project9.jpeg";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    {
        name: "Mobile App",
        id: "mobile-app",
    },
    {
        name: "Website",
        id: "website",
    },
];

export const projects = [
    {
        name    : "Web developer personal portfolio using only basic HTML & CSS",
        image   : p1,
        live_url: "https://github.com/",
        github_url:'https://github.com/',
        tags: ["dashboard", "mobile-app"],
    },
    {
        name: "Movie searching App using react,redux,tailwind and TMDB API",
        image: p2,
        tags: ["dashboard", "website"],
    },
    {
        name: "Web Developer Portfolio using HTML,CSS & Javascript",
        image: p3,
        tags: ["mobile-app"],
    },
    {
        name: "Netflix homepage clone using basic HTML & CSS",
        image: p4,
        tags: ["mobile-app"],
    },
    {
        name: "Starbucks homepage clone using basic HTML & CSS",
        image: p5,
        tags: ["website", "dashboard"],
    },
    {
        name : "Simple Calculator using Javascript",
        image: p6,
        tags : ["website"],
    },
    {
        name : "DictoGuru- Dictionary App using react, materialUI and google dictionary App",
        image: p7,
        tags : ["website"],
    },
    {
        name : "Simple Joke generator using javascript and Joke API",
        image: p8,
        tags : ["website"],
    },
    {
        name : "Simple Word Editor using Javascript ",
        image: p9,
        tags : ["website"],
    },
];

export const achievements = [
    {
        id: 1,
        year: 80,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 15,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 25,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 70,
        description: "COMMUNITY<br />POSTS",
    },
];
