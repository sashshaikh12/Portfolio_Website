import React from "react";
import { ReactTyped } from "react-typed";
import { SiCodeforces, SiCodechef, SiLeetcode, SiGithub, SiLinkedin } from "react-icons/si";
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react';


function Hero() {

    var tl = gsap.timeline();

    useGSAP(() => {
        tl.from(".mypic",{
            y:30,
            duration: 1,
            delay: 0.5,
            opacity: 0,
        });

        tl.from(".char", {
            y: 50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            display: "inline-block",
          });

        tl.from(".reactTyped", {
            opacity: 0,
            duration: 0.6,
            delay: 0.05,
            ease: "power2.out",
        });

        tl.from(".heroPara", {
            x: -100,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
        });

        tl.from(".codingIcons", {
            x: 100,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
        });

        tl.from(".resumeButton", {
            y: -200,
            opacity: 0,
            duration: 1,
            ease: "bounce.out",
        });
    });

    const splitText = (text) => {
        return text.split("").map((char, index) => (
          <span key={index} className="char">
            {char}
          </span>
        ));
      };
    

    return(
        <div className="text-white" id="#">
            <div className="lg:mt-7 max-w-[800px] w-full min-h-screen mx-auto text-center flex flex-col justify-center items-center">
                <img src = "hashirPic.jpg" alt = "hashir" className="h-40 w-40 rounded-full sm:h-64 sm:w-64 mypic"   />
                <h5 className="text-base font-[400] pt-5 sm:text-[20px] font-[Poppins] md:text-[20px] md:font-[500] md:pt-4">{splitText("Hello, I'm Hashir Shaikh Suleman")}</h5>
                <ReactTyped strings={["Competitive Programmer", "Web Developer", "App Developer" ,"Machine Learning Enthusiast"]} typeSpeed={60} backSpeed={25} loop className="reactTyped pt-6 text-base font-bold sm:text-4xl sm:font-bold md:pt-5 font-[Poppins] md:text-[44px] md:font-[700]" />
                <p className="heroPara text-sm pt-6 md:pt-8 font-[Poppins] md:text-[17px] md:font-[400] text-gray-400">I'm a 3rd Year undergraduate student at PES University, Bangalore</p>
                <p className="heroPara text-sm pt-4 md:pt-4 font-[Poppins] md:text-[17px] md:font-[400] text-gray-400">I pursue Computer Science Engineering and coding is my hobby!!!</p>
                <div className="codingIcons flex justify-center items-center pt-4 space-x-4 mt-7">
                    <a href = "https://codeforces.com/profile/sashshaikh12" target="_blank" rel="noopener noreferrer"><SiCodeforces  className="icon-size-hero hover-effect hover:cursor-pointer"/></a>
                    <a href = "https://www.codechef.com/users/sashshaikh12" target="_blank" rel="noopener noreferrer"><SiCodechef  className="icon-size-hero hover-effect hover:cursor-pointer"/></a>
                    <a href = "https://leetcode.com/u/sashshaikh12/" target="_blank" rel="noopener noreferrer"><SiLeetcode  className="icon-size-hero hover-effect hover:cursor-pointer"/></a>
                    <a href = "https://github.com/sashshaikh12" target="_blank" rel="noopener noreferrer"><SiGithub  className="icon-size-hero hover-effect hover:cursor-pointer"/></a>
                    <a href = "https://www.linkedin.com/in/hashir-shaikh-9603a629a/" target="_blank" rel="noopener noreferrer"><SiLinkedin  className="icon-size-hero hover-effect hover:cursor-pointer"/></a>
                </div>
                <a className="resumeButton flex items-center justify-center w-[200px] h-[40px] font-[Poppins] bg-[black] rounded-3xl sm:w-[200px] font-light sm:font-medium sm:h-[50px] mt-7 hover:bg-white hover:text-black border-white border-2" href="https://drive.google.com/file/d/1YAPP8R59e5zHDXWGUG4RyST61aZZZh8a/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </div>
        </div>
    );

};

export default Hero;