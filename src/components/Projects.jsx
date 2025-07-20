import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Projects() {
  const projects = [
    {
      url: "https://play.google.com/store/apps/details?id=com.wirasat.tayseerulfaraiz",
      title: "Tayseer-ul-Faraiz",
      description: "Tayseer-ul-Faraiz is a fully offline, multilingual mobile app developed using React Native, Expo, NativeWind, and i18n to simplify the complex process of Islamic inheritance distribution. Designed to assist users who may struggle with mathematical calculations, the app reduces what typically takes 1–2 hours to just 5–15 minutes with an intuitive, user-friendly interface. With just one button click, users can calculate inheritance shares by simply entering the number of heirs. The app clearly shows the distribution breakdown and the reasoning behind it, making Islamic inheritance accessible and understandable to all. Arabic support is also planned for future updates. 📱 500+ downloads across 13 countries, empowering communities with accessible tech.",
      techStack: "React Native, Expo, NativeWind, i18n",
      image_url: "Tayseer_ul_Faraiz.jpg",
    },
    {
      url: "https://github.com/sashshaikh12/campus-event-management",
      title: "Campus Resource and Event Management System",
      description: "The Campus Resource and Event Management System is built using Express, Node.js, React, and SQL. It allows club heads to request events, which HODs approve, making them visible college-wide. The system features room management and faculty-driven attendance tracking to monitor student participation. Students with frequent absences are automatically blacklisted, with an option to appeal. Advanced SQL techniques, including 3NF normalization, JOINs, nested queries, triggers, and procedures, ensure efficient data handling and smooth functionality.",
      techStack: "ReactJs, NodeJs, ExpressJs, SQL",
      image_url: "dbms_project.jpeg",
    },
    {
      url: "https://github.com/sashshaikh12/DSA-Project ",
      title: "UNO Card Game",
      description: "Developed a terminal-based Uno card game where the user plays against the computer, built for a DSA course project using only C. The game uses linked lists for card distribution and stacks for the draw and discard piles. It implements all Uno rules, including skips, reverses, and wild cards, with colored card displays in the terminal. This project highlights efficient use of data structures to manage game mechanics and player turns.",
      techStack: "C language",
      image_url: "uno_game.jpeg",
    },
    {
      url: "",
      title: "Enhanced Hangman Game",
      description: "Developed an advanced Hangman game with a Tkinter-based UI and 3D design using Blender. Integrated a time-based challenge and interactive features with Pygame, including custom audio. Built the entire project using Python for both frontend and backend functionality.",
      techStack: "Python, Tkinter, Blender, Pygame",
      image_url: "pyman.jpeg",
    },
    {
      url: "",
      title: "Online Queuing System",
      description: "Created a virtual queuing system for supermarkets using Python and Django to eliminate long physical queues. Customers can scan a QR code after shopping to join an online queue, where they wait for their turn while freeing up their time. Once it's their turn, they make an online payment and can collect their items later at their convenience. This system reduces idle time spent in queues and streamlines the payment process.",
      techStack: "Python, Django, MongoDB",
      image_url: "queue_pic.jpeg",
    },
    {
      url: "https://github.com/sashshaikh12/Portfolio_Website",
      title: "Portfolio Website",
      description: "This website is a platform that showcases my experiences, skills, projects, and certifications, offering insight into my professional journey and achievements. It also includes a contact section, making it easy for people to connect with me for opportunities or collaborations.",
      techStack: "ReactJs, TailwindCSS",
      image_url: "portfolio_pic.jpeg",
    }
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".projectHeadingContainer", {
      x: -200,
      duration: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".projectHeadingContainer",
        scroller: "body",
        start: "top 60%",
      }
  });

  gsap.from(".projectsContainer", {
    duration: 1.5,
    delay: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".projectsContainer",
      scroller: "body",
      start: "top 60%",
    }
});

});


  return (
    <div className="text-white mt-24 font-[Poppins] w-full bg-[#080808]" id="Projects">
      <div className="projectHeadingContainer flex max-w-[800px] flex-col mb-16">
        <h1 className= "text-center sm:text-left sm:pl-16 pt-24 text-3xl font-medium sm:text-[36px] sm:font-[700] md:text-[45px] md:font-[600]">Projects</h1>
        <h3 className="text-center text-[22px] font-[400] pt-10 sm:text-left sm:pl-16">What I've Built So Far</h3>
        <p className=" text-center text-[18px] font-[400] pt-6 text-gray-400 sm:text-left sm:pl-16">I've worked on a variety of projects that reflect my passion for solving real-world problems and building innovative solutions. From designing robust full-stack web applications to creating engaging games and interactive tools, my work combines creativity, technical expertise, and a focus on user experience.</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-full"
        >

        {projects.map((project, index) => (
          <SwiperSlide key={index}>
          <div className="projectsContainer pb-24 flex justify-center h-full">
            <div className="bg-gray-800 flex flex-col justify-between items-center w-full max-w-[350px] min-w-[250px] h-auto p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4">
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-[200px] object-contain rounded-lg mb-4"
              />
              <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-7 text-center">{project.title}</h2>
                <p className="text-sm text-gray-400 mb-6 text-justify">
                  {project.description}
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
                {project.url && (
                    <a
                      href={project.url}
                      target="_blank" rel="noopener noreferrer"
                      className="mt-auto inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 text-center"
                    >
                      Source Code
                    </a>
                  )}
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;