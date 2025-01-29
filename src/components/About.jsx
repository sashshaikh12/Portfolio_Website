import React, { useEffect } from "react";
import { useRef } from 'react';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAngleDoubleUp } from "react-icons/fa";


function About() {

    const skills = [
        {
            name: "C++",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        },
        {
            name: "Python",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        },
        {
            name: "JavaScript",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        {
            name: "React",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        {
            name: "Node.js",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        },
        {
            name: "Express",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
        },
        {
            name: "HTML5",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
            name: "CSS3",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        },
        {
            name: "Tailwind CSS",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
        },
        {
            name: "Git",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        },
        {
            name: "GitHub",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        },
        {
            name: "VS Code",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
        },
        {
            name: "Postman",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
        },
        {
            name: "C",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
        },
        {
            name: "SQL",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
        },
        {
            name: "golang",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
        },
        {
            name: "vercel",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
        },

    ];

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(".aboutHeading", {
            x: -200,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".aboutHeading",
                scroller: "body",
                start: "top 60%",
            },
        });

        gsap.from(".greetingWithName", {
            x: -200,
            duration: 0.8,
            opacity: 0,
            scrollTrigger: {
                trigger: ".greetingWithName",
                scroller: "body",
                start: "top 60%",
            },
        });

        gsap.from(".myDescription", {
            x: -200,
            duration: 0.8,
            opacity: 0,
            scrollTrigger: {
                trigger: ".myDescription",
                scroller: "body",
                start: "top 60%",
            },
        });

        gsap.from(".aboutMePic", {
            x: 200,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".aboutMePic",
                scroller: "body",
                start: "top 60%",
            },
        });

        gsap.from(".techSkillsHeading", {
            y: 50,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".techSkillsHeading",
                scroller: "body",
                start: "top 60%",
            },
        });

        gsap.from(".techSkillsContainer", {
            // x: -200,
            duration: 3,
            delay: 0.05,
            opacity: 0,
            scrollTrigger: {
                trigger: ".techSkillsContainer",
                scroller: "body",
                start: "top 60%",
            },
        });

        ScrollTrigger.create({
            trigger: ".myDescription",
            start: "top 60%",
            onEnter: () => gsap.to(".scrollButton", { opacity: 1, visibility: "visible" }),
            onLeaveBack: () => gsap.to(".scrollButton", { opacity: 0, visibility: "hidden" }),
          });

    });

  return (
    <div className="text-white bg-[#080808] mt-4 font-[Poppins] w-full" id="About">
        <h3 className="aboutHeading lg:hidden  pb-6 pt-24 text-3xl font-medium sm:text-[36px] sm:font-[700] md:text-[45px] md:font-[600] pl-10">About Me</h3>
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-28">
        <div className="flex flex-col justify-center px-12" >
            <h3 className="aboutHeading hidden lg:block lg:pt-24 lg:text-[45px] lg:font-[700]">About Me</h3>
            <h3 className="greetingWithName text-[22px] font-[400] lg:pt-10">Hey, I'm <span className="font-[600]">Hashir Shaikh Suleman</span></h3>
            <p className="myDescription text-[18px] font-[400] pt-6 text-gray-400">
                Hello! I am a Computer Science Undergraduate at PES University, Bangalore. I am currently in 6th semester. I am passionate about competitive programming and web development. I have been coding problems for about 3 years now and I enjoy it even more now as I dive deeper into interesting data structures and algorithms. I have also had a keen interest in web development, and in the recent times I have been working on my development skills as well, always learning new things. Apart from tech and coding hobbies, I truly enjoy playing outdoor sports, especially basketball. I have been a steph curry fan always!<br/>Keep following me, I will be sharing my journey as a developer here from time to time!!!
            </p>
        </div>
        <img src = "CodingPic.jpg" alt = "coding picture" className="aboutMePic pt-10 lg:pt-48 mx-auto lg:pr-10 lg:h-full object-cover order-first lg:order-none"/>
        <a className="scrollButton fixed bottom-4 right-4 bg-white text-black px-4 py-2 rounded-xl shadow-lg opacity-0 visibility-hidden transition-opacity duration-300 hover:cursor-pointer z-10" href="#">
        <FaAngleDoubleUp />
      </a>
      </div>

    {/* Tech skills */}

    <h1 className="techSkillsHeading pt-28 text-[22px] font-[600] text-center mx-auto">Tech Skills</h1>
    <div className="flex flex-wrap justify-center pt-10 gap-4 pb-24 ">
        {skills.map((skill) => (
                <div key={skill.name} className="techSkillsContainer bg-gray-800 p-4 rounded-lg flex flex-col items-center  w-20 sm:w-40 hover:rounded-full hover:bg-white hover:text-black">
                    <img src={skill.url} alt={skill.name} className="h-8 w-8 sm:h-12 sm:w-12 object-contain" />
                    <h2 className="mt-4 text-xs sm:text-lg font-medium">{skill.name}</h2>
                </div>
                ))}
    </div>
        

    </div>
  );
}

export default About;