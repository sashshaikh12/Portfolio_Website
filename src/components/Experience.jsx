import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Experience() {
  const exp = [
    {
      StartDate: "November 2024",
      EndDate: "Present",
      Role: "Technical Domain Member",
      Company: "Alcoding Club",
      Description:
        "Alcoding Club is a technical club of my college and the official Competitive Programming club of the college. I am a part of Technical Domain in this club. I help in organising Club hackathons and competitions. I also help in framing questions for the competitions and help in organising workshops and webinars",
      url: "alcoding.png"
    },
    {
      StartDate: "March 2023",
      EndDate: "Present",
      Role: "Mentor",
      Company: "Nexus Club",
      Description:
        "Nexus Club is a technical club of my college. I am a mentor of competitive programming in this club. I teach students about data structures and algorithms and help them to improve their problem solving skills. I also help in organising Club hackathons and competitions",
      url: "nexus.png"
    }
  ];

  return (
    <div className="text-white mt-4 font-[Poppins] w-full">
      <h1 className="text-center sm:text-left sm:pl-16 pt-16 text-3xl font-medium sm:text-[36px] sm:font-[700] md:text-[45px] md:font-[600]">Experience</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 pt-28">
        {exp.map((experience, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center lg:text-left mb-4">
              <p className="text-lg font-medium text-gray-400">{experience.StartDate} - {experience.EndDate}</p>
            </div>
            <div className="flex items-center mb-7">
              <img src={experience.url} alt={experience.Company} className="h-12 w-12 mr-4 rounded-full border-2 border-gray-300" />
              <h3 className="text-lg font-medium text-gray-300">{experience.Company}</h3>
            </div>
            <h2 className="text-xl font-semibold mb-4">{experience.Role}</h2>
            <p className="text-base text-gray-400 mb-4">{experience.Description}</p>
            <div className="flex justify-end">
              <FaExternalLinkAlt size={24} className="text-gray-400 hover:text-white transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;