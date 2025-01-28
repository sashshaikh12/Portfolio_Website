import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from 'react';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Education = () => {


  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".educationHeading", {
      y: -100,
      duration: 0.7,
      opacity: 0,
      scrollTrigger: {
        trigger: ".educationHeading",
        scroller: "body",
        start: "top 60%",
      }
  });

  gsap.from(".educationDescription", {
    x: 400,
    duration: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: ".educationDescription",
      scroller: "body",
      start: "top 60%",
    }
});


});

  return (
    <div className="text-white font-[Poppins] w-full" id="Education">
      <div className="flex max-w-[800px] flex-col mb-28">
        <h1 className="educationHeading text-center sm:text-left sm:pl-16 pt-24 text-3xl font-medium sm:text-[36px] sm:font-[700] md:text-[45px] md:font-[600]">Education</h1>
        <h3 className="educationDescription text-center text-[22px] font-[400] pt-10 sm:text-left sm:pl-16">A glimpse into my academic journey, highlighting the skills, knowledge, and experiences I’ve gained along the way.</h3>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work font-[Poppins] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          contentStyle={{ background: 'rgb(63, 81, 181)', color: '#fff', borderRadius: '50px', border: '2px solid black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - 2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src="mccs.jpg" alt="school" className="timeline-icon" />}
        >
          <h1 className="vertical-timeline-element-title" style={{fontSize : "20px", fontWeight: "600"}}> Mount Carmel Central School</h1>
          <h4 className="vertical-timeline-element-subtitle pt-4" style={{fontSize : "18px", fontWeight : "400"}}>High School</h4>
          <p style={{fontSize: '15px', fontWeight : "300"}} className="pb-4">
            I joined school for the first time in grade 2, and spent the next 9 years learning, growing, and making memories. I was actively involved in extracurricular activities, such as sports, music, and dance, and participated in various competitions and events. I also developed a strong foundation in academics, with a focus on science and mathematics.
          </p>
          <div className="w-full flex justify-end">
            <a href = "https://www.mtcarmelcs.org/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size={24} className="text-gray-400 hover:text-white transition-colors duration-300 hover:cursor-pointer" /></a>
          </div>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work font-[Poppins] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          contentStyle={{ background: 'rgb(63, 81, 181)', color: '#fff', borderRadius: '50px', border: '2px solid black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2020 - 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src="tlc.png" alt="PUC" className="timeline-icon" />}
        >
          <h1 className="vertical-timeline-element-title" style={{fontSize : "20px", fontWeight: "600"}}>The Learning Centre, PU College</h1>
          <h4 className="vertical-timeline-element-subtitle pt-4"style={{fontSize : "18px", fontWeight : "400"}}>PUC</h4>
          <p style={{fontSize: '15px', fontWeight : "300"}} className="pb-4">
            After completing high school at Mount Carmel Central School, I took a significant step by joining TLC, where I studied PCMC. This marked the first time I changed schools after spending 9 wonderful years at Mount Carmel. At TLC, I had the opportunity to meet incredible people from various parts of the district—like-minded individuals who shared a passion for science and were a joy to be around.
          </p>
          <div className="w-full flex justify-end">
            <a href="https://tlc.edu.in/pu-college/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size={24} className="text-gray-400 hover:text-white transition-colors duration-300 hover:cursor-pointer" /></a>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work font-[Poppins] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          contentStyle={{ background: 'rgb(63, 81, 181)', color: '#fff', borderRadius: '50px', border: '2px solid black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2020 - 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src="cfal.jpg" alt="Coaching Center" className="timeline-icon" />}
        >
          <h1 className="vertical-timeline-element-title"style={{fontSize : "20px", fontWeight: "600"}}>Center For Advanced Learning</h1>
          <h4 className="vertical-timeline-element-subtitle pt-4"style={{fontSize : "18px", fontWeight : "400"}}>Coaching Center</h4>
          <p style={{fontSize: '15px', fontWeight : "300"}} className="pb-4">
            During my PUC, I was also part of CFAL, a renowned coaching center that prepares students for competitive exams like JEE and NEET. The best part? It was managed by the TLC staff, which meant many of my coaching classmates were also my PU friends! This made preparing for competitive exams an enjoyable and collaborative experience, surrounded by motivated peers who excelled in their subjects. We studied together, attended classes side by side, and created countless memories. Those two pivotal years of my life were made adventurous and unforgettable by the incredible people I met at CFAL.
          </p>
          <div className="w-full flex justify-end">
            <a href="https://www.cfalindia.com/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size={24} className="text-gray-400 hover:text-white transition-colors duration-300 hover:cursor-pointer" /></a>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work font-[Poppins] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          contentStyle={{ background: 'rgb(63, 81, 181)', color: '#fff', borderRadius: '50px', border: '2px solid black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2022 - 2026"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src="pesu.webp" alt="University" className="timeline-icon" />}
        >
          <h1 className="vertical-timeline-element-title"style={{fontSize : "20px", fontWeight: "600"}}>PES University</h1>
          <h4 className="vertical-timeline-element-subtitle pt-4"style={{fontSize : "18px", fontWeight : "400"}}>University</h4>
          <p style={{fontSize: '15px', fontWeight : "300"}} className="pb-4">  
            Thanks to CFAL, I achieved an impressive 97 percentile in JEE Mains. However, my passion for Computer Science and Engineering (CSE) led me to secure a seat at PES University, Bangalore, RR Campus, through a decent rank in the KCET exam. This marks my first time living away from my hometown, making this journey even more adventurous. Now, I’m pursuing CSE surrounded by a fantastic group of people, and I’m excited for the next four years filled with learning, growth, and unforgettable experiences.
          </p>
          <div className="w-full flex justify-end">
            <a href="https://pes.edu/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size={24} className="text-gray-400 hover:text-white transition-colors duration-300 hover:cursor-pointer" /></a>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;