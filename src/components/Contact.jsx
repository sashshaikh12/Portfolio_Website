import React from "react";
import {SiGithub, SiLinkedin, SiGmail, SiInstagram, SiCodeforces } from "react-icons/si";
import { useRef } from 'react';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contact(){

    gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".contactHeading", {
      x: -500,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".contactHeading",
        scroller: "body",
        start: "top 60%",
      }
  });

  gsap.from(".contactDescription", {
    x: 500,
    duration: 1.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".contactDescription",
      scroller: "body",
      start: "top 60%",
    }
});

gsap.from(".contactIcon", {
    x: -200,
    duration: 0.3,
    opacity: 0,
    rotate: 360,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".contactDescription",
      start: "top 60%",
    }
});

});

    return(
        <div className="text-white font-[Poppins] w-full" id="Contact">
            <div className="flex max-w-[800px] flex-col mb-16">
                <h1 className="contactHeading pb-12 text-center sm:text-left sm:pl-16 pt-24 text-3xl font-medium sm:text-[36px] sm:font-[700] md:text-[45px] md:font-[600]">Contact</h1>
                <h3 className="contactDescription text-center text-[18px] font-[400] pt-0 text-gray-400 sm:text-left sm:pl-16">Got an idea to build, a problem to solve, or just want to connect? I’m here for it all! From crafting seamless web experiences to diving into data or coding up solutions, let’s create something extraordinary together."</h3>
                <div className="flex justify-center sm:justify-start pt-4 space-x-10 mt-7 sm:pl-16">
                    <a href = "https://github.com/sashshaikh12" className="contactIcon"><SiGithub  className="inline-block mt-7 icon-size hover:cursor-pointer hover-effect"/></a>
                    <a href = "https://www.linkedin.com/in/hashir-shaikh-9603a629a/" className="contactIcon"><SiLinkedin  className="inline-block mt-7 icon-size hover:cursor-pointer hover-effect"/></a>
                    <a href = "mailto:sashshaikh12@gmail.com" className="contactIcon"><SiGmail  className="inline-block mt-7 icon-size hover:cursor-pointer hover-effect"/></a>
                    <a href = "https://www.instagram.com/_hashir_313?igsh=aWg4Z2pqOHd4eTJp" className="contactIcon"><SiInstagram  className="inline-block mt-7 icon-size hover:cursor-pointer hover-effect"/></a>
                    <a href = "https://codeforces.com/profile/sashshaikh12" className="contactIcon"><SiCodeforces  className="inline-block mt-7 icon-size hover:cursor-pointer hover-effect"/></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;