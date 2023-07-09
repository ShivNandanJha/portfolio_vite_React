import React from "react";

import Wrapper from "./Wrapper";
import Form from "./Form";
import Div from "./Div";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full py-[50px] md:py-[100px] bg-[#F2F2F2] relative overflow-hidden"
    >
      <Wrapper>
        {/* SECTION HEADING START */}
        <Div className="mb-10 relative">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
            Let’s Talk
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
            Please feel free to reach out to me using the contact form below. I
            am eager to connect, engage, and explore the endless possibilities
            that lie ahead. Let's create something extraordinary together!
          </div>
        </Div>
        {/* SECTION HEADING END */}

        <Form />
      </Wrapper>
    </div>
  );
};

export default Contact;
