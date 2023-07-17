import React from "react";
import { ImFacebook } from "react-icons/im";
import { LuYoutube, LuInstagram, LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <div className="footer flex flex-col justify-center bg-[#FDCFC4] h-[430px] w-screen p-[16px]">
      <div className="mt-5 flex items-center justify-around  h-[80%] ">
        <div className="logo bg-[#9D9D9D] text-[white] p-6">Logo</div>
        <div className="optionlist flex gap-60">
          <ul>
            <li>Our Story</li>
            <li>Products</li>
            <li>Blogs</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="social flex-col gap-4 h-20">
          <h2 >Get In Touch</h2>
          <div className="socialIcons mt-3 flex gap-4 ">
            <LuInstagram  />
            <LuYoutube />
            <ImFacebook />
            <LuTwitter />
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[1px] bg-[#C8BB7E] mb-20 mx-auto">
      </div>
      </div>
    </>
  );
};

export default Footer;
