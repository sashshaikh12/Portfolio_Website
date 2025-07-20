import React, { use } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from 'react';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Experience() {
  const exp = [
    {
      StartDate: "November 2024",
      EndDate: "May 2025",
      Role: "Technical Domain Member",
      Company: "Alcoding Club",
      Description:
        "Alcoding club is the official Competitive Programming club of the college. I work in Technical Domain of the club. I help in organising Club hackathons and competitions. I also help in framing questions for the competitions and help in organising workshops and webinars.",
      url: "alcoding.png",
      site_url: "https://clubs.pes.edu/the-alcoding-club/",
    },
    {
      StartDate: "March 2023",
      EndDate: "May 2025", 
      Role: "Mentor",
      Company: "Nexus Club",
      Description:
        "Nexus Club is an another technical club of my college. I am a mentor of competitive programming in this club. I teach students about data structures and algorithms and help them improve their problem solving skills. I also help in organising Club hackathons and competitions.",
      url: "nexus.png",
      site_url: "https://nexus-pes.vercel.app/",
    }
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
      gsap.from(".experienceHeading", {
          x: 500,
          duration: 2,
          opacity: 0,
          scrollTrigger: {
            trigger: ".experienceHeading",
            // scroller: "body",
            start: "top 60%",
          }
      });

      gsap.from(".experienceQuote", {
        x: 500,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: ".experienceQuote",
          // scroller: "body",
          start: "top 60%",
        }
    });

    gsap.from(".experienceCard", {
      y: -500,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".experienceCard",
        // scroller: "body",
        start: "top 60%",
      }
  });

  });


  return (
    <div className="text-white mt-4 font-[Poppins] w-full" id="Experience">
      <h1 className="experienceHeading text-center sm:text-left sm:pl-16 pt-16 text-3xl font-medium sm:text-[36px] sm:font-[700] md:text-[45px] md:font-[600]">Experience</h1>
      <h2 className="experienceQuote text-center text-[15px] md:text-[18px] font-[100] pt-10 sm:text-left sm:pl-16">"Experience is not what happens to you; it’s what you do with what happens to you."
– Aldous Huxley</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 pt-28">
        {exp.map((experience, index) => (
          <div key={index} className="experienceCard bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center lg:text-left mb-4">
              <p className="pb-4 text-lg font-medium text-gray-400">{experience.StartDate} - {experience.EndDate}</p>
            </div>
            <div className="flex items-center mb-7">
              <img src={experience.url} alt={experience.Company} className="h-12 w-12 mr-4 rounded-full border-2 border-gray-300" />
              <h3 className=" text-lg font-medium text-gray-300">{experience.Company}</h3>
            </div>
            <h2 className="pt-2 text-xl font-semibold mb-4">{experience.Role}</h2>
            <p className="pt-2 text-base text-gray-400 mb-4">{experience.Description}</p>
            <div className="flex justify-end">
              <a href = {experience.site_url} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size={24} className="text-gray-400 hover:text-white transition-colors duration-300 hover:cursor-pointer" /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;