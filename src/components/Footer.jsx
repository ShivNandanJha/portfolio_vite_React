import React from "react";
import Wrapper from "./Wrapper";
import gmailIcon from "../assets/email-icon.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/SK8.png";
import codepen from "../assets/codepen.png";
import { scrollTo } from "../helper";

const Footer = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Wrapper>
        {/* NAVBAR START */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-10">
          <div className="flex items-center gap-[6px]">
            <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
              <img src={gmailIcon} alt="" className="w-[18px]" />
            </div>
            <div>shivjha1226@gmail.com</div>
          </div>
          <div></div>
          <ul className="flex 2xl:text-[20px] gap-5 md:gap-8">
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("about")}
            >
              About me
            </li>
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("work")}
            >
              Work
            </li>
            <li
              className="cursor-pointer transition active:scale-90"
              onClick={() => scrollTo("contact")}
            >
              Contact
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/shiv-nandan-jha-4179a4251"
              target="_blank"
            >
              <img src={linkedin} alt="LinkedIn" className="w-[25px]" />
            </a>
            <a href="https://github.com/ShivNandanJha" target="_blank">
              <img src={github} alt="GitHub" className="w-[25px]" />
            </a>
            <a href="https://codepen.io/Shivi-Code" target="_blank">
              <img src={codepen} alt="CodePen" className="w-[25px]" />
            </a>
          </div>
        </div>
        {/* NAVBAR END */}
      </Wrapper>
    </div>
  );
};

export default Footer;
