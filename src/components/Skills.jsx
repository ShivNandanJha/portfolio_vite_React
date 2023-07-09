import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/SK1.png";
import sk2 from "../assets/SK2.png";
import sk3 from "../assets/SK3.png";
import sk4 from "../assets/SK4.png";
import sk5 from "../assets/SK5.png";
import sk6 from "../assets/SK6.png";
import sk7 from "../assets/SK7.png";
import sk8 from "../assets/SK8.png";
import sk9 from "../assets/SK9.png";
import sk10 from "../assets/SK10.png";
import sk11 from "../assets/SK11.png";
import sk12 from "../assets/SK12.png";
import sk13 from "../assets/SK13.png";
import sk14 from "../assets/SK14.png";
import sk15 from "../assets/SK15.png";

import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
  const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
  return (
    <div
      id="skills"
      className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <div className="sec-3-bg-gradient-1" />
      <div className="sec-3-bg-gradient-2" />
      <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
      <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
      {/* BACKGROUND ELEMENTS END */}
      <Wrapper>
        {/* SKILL ICONS START */}
        <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
          <SkillIcon path={sk1} />
          <SkillIcon path={sk2} />
          <SkillIcon path={sk3} />
          <SkillIcon path={sk4} />
          <SkillIcon path={sk5} />
          {<SkillIcon path={sk6} />}
          <SkillIcon path={sk12} />
          <SkillIcon path={sk13} />
          <SkillIcon path={sk14} />
          <SkillIcon path={sk7} />
          <SkillIcon path={sk8} />
          <SkillIcon path={sk9} />
          <SkillIcon path={sk10} />
          <SkillIcon path={sk11} />
          <SkillIcon path={sk15} />
        </Div>
        {/* SKILL ICONS END */}

        {/* SERVICES SECTION START */}
        <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
          {/* SERVICES START */}
          <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
            <Service
              num="1"
              title="Frontend Development"
              desc="As a passionate frontend developer, I have honed my skills in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and React.js. With a solid foundation in these technologies, I have successfully worked on various projects, creating visually stunning and user-friendly websites. From crafting responsive layouts to implementing interactive features, I thrive on delivering seamless user experiences. If you have any frontend development needs or would like to collaborate on an exciting project, please feel free to get in touch. I look forward to creating captivating digital experiences together."
              data={[
                "HTML",
                "CSS/SCSS",
                "JavaScript",
                "Bootstrap,tailwind,MUI",
                "ReactJS",
              ]}
            />
            <Service
              num="2"
              title="Backend Development"
              desc="As a dedicated learner, I am currently focusing on honing my skills in MERN stack development. I have successfully completed several projects using Node.js, Express.js, MongoDB, and Firebase, and I am constantly seeking opportunities to further expand my knowledge and expertise. Additionally, I am venturing into the world of Python and eagerly looking forward to acquiring new languages and enhancing my skill set. If you have any suggestions or exciting opportunities to share, please don't hesitate to reach out to me. Let's embark on this journey of growth and innovation together!"
              data={["MongoDB", "Firebase", "NodeJS", "ExpressJS", "Python"]}
            />
            <Service
              num="3"
              title="UI/UX Designer"
              desc="I am also expanding my skills in UI/UX development, with a particular focus on creating intuitive and visually appealing user interfaces. I have gained valuable experience in utilizing design tools such as Figma, which has allowed me to bring my creative visions to life. As I continue to expand my knowledge and expertise in this field, I am eager to collaborate with like-minded professionals and contribute to innovative projects. Please feel free to reach out to me through the contact form below. Let's embark on a journey of innovation and user-centric design together!"
              data={[
                "Prototype",
                "Wireframe",
                "User Experience",
                "User Interface",
                "Figma",
              ]}
            />
            {/* <Service
              num="4"
              title="Wordpress Development"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
              data={[
                "Prototype",
                "Wireframe",
                "User Experience",
                "Prototype",
                "Prototype",
              ]}
            /> */}
          </div>
          {/* SERVICES END */}

          {/* SECTION HEADING START */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
            <span>Solving</span>
            <span>Problems</span>
            <span className="flex items-center gap-2">
              Through
              <img src={pattern} className="block md:hidden w-[80px] mt-1" />
            </span>
            <span className="flex items-center gap-4">
              Good{" "}
              <img
                src={pattern}
                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
              />
            </span>
            <span>Services</span>
          </div>
          {/* SECTION HEADING END */}
        </div>
        {/* SERVICES SECTION END */}

        <Portfolio />
        <Achievements />
      </Wrapper>
    </div>
  );
};

export default Skills;
