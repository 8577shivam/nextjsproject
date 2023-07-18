import React from "react";
import { ImFacebook } from "react-icons/im";
import { LuYoutube, LuInstagram, LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <div className="footer bg-[#FDCFC4] flex flex-col justify-center h-[430px] w-screen p-[16px]">
      <div className=" innerfooter">
        <div className="logo bg-[#9D9D9D] text-[white] p-[1.6vw]">Logo</div>
        <div className="optionlist">
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
        <div className="social">
          <h2>Get In Touch</h2>
          <div className="socialIcons">
            <LuInstagram  />
            <LuYoutube />
            <ImFacebook />
            <LuTwitter />
          </div>
        </div>
      </div>
      <div className="hbar w-[80%] h-[1px] bg-[#C8BB7E] mb-[5.5vw] mx-auto">
      </div>
      </div>
    </>
  );
};

export default Footer;
