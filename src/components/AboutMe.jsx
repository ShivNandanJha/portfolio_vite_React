import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>A Website Designer</span>
          <span className="flex items-center gap-2">
            <span>Based</span>
            <img
              src={flag}
              alt=""
              className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
            />
            <span>In India</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div
          className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative"
          style={{ fontFamily: "'Noto Serif', serif" }}
        >
          <h2 style={{ fontFamily: "'Cedarville Cursive',cursive" }}>
            &lt;p&gt;
          </h2>
          Welcome to my web developer portfolio! My name is Shiv Nandan Jha, and
          I am a skilled Frontend Web Developer with a passion for creating
          visually stunning, responsive, and user-friendly websites. With over
          1+ years of experience in web development, I have honed my skills in
          HTML, CSS, and JavaScript, and am well-versed in a variety of
          front-end frameworks such as Tailwind, Bootstrap, and ReactJS library.
          <h2 style={{ fontFamily: "'Cedarville Cursive',cursive" }}>
            &lt;br/&gt;
          </h2>{" "}
          My expertise in these technologies enables me to create dynamic and
          interactive websites that are optimized for both desktop and mobile
          devices. Whether it's a small personal website, large enterprise
          application, or custom small website games, Shopify stores, and
          landing pages, I approach every project with the same level of
          attention to detail and dedication to quality.{" "}
          <h2 style={{ fontFamily: "'Cedarville Cursive',cursive" }}>
            &lt;br/&gt;
          </h2>{" "}
          <br />I prioritize creating clean and semantic code to ensure that my
          websites are not only visually appealing but also accessible to all
          users. I also have experience working with design tools such as
          Sketch, Canva, and Figma, which enables me to work efficiently with
          design teams to bring their visions to life.{" "}
          <h2 style={{ fontFamily: "'Cedarville Cursive',cursive" }}>
            &lt;br/&gt;
          </h2>{" "}
          I am passionate about staying up-to-date with the latest web
          development trends and technologies, and I am always learning and
          experimenting with new tools and techniques. I am a quick learner and
          can adapt to new technologies and programming languages quickly. In my
          free time, I enjoy contributing to open-source projects, writing
          articles, and experimenting with new technologies.
          <h2 style={{ fontFamily: "'Cedarville Cursive',cursive" }}>
            &lt;br/&gt;
          </h2>{" "}
          <br />
          If you're looking for a dedicated and skilled web developer for your
          next project, look no further. I am always open to new opportunities
          and excited to collaborate with you to bring your vision to life.
          <h2 style={{ fontFamily: "'Cedarville Cursive',cursive" }}>
            &lt;/p&gt;
          </h2>{" "}
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH END */}
      </Wrapper>
    </div>
  );
};

export default AboutMe;
