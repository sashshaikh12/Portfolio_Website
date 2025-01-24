import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Projects() {
  const projects = [
    {
      url: "",
      title: "Campus Resource and Event Management System",
      description: "The Campus Resource and Event Management System is built using Express, Node.js, React, and SQL. It allows club heads to request events, which HODs approve, making them visible college-wide. The system features room management and faculty-driven attendance tracking to monitor student participation. Students with frequent absences are automatically blacklisted, with an option to appeal. Advanced SQL techniques, including 3NF normalization, JOINs, nested queries, triggers, and procedures, ensure efficient data handling and smooth functionality.",
      techStack: "ReactJs, NodeJs, ExpressJs, SQL",
      image_url: "dbms_project.jpeg",
    },
    {
      url: "",
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
      url: "",
      title: "Portfolio Website",
      description: "This website is a platform that showcases my experiences, skills, projects, and certifications, offering insight into my professional journey and achievements. It also includes a contact section, making it easy for people to connect with me for opportunities or collaborations.",
      techStack: "ReactJs, TailwindCSS",
      image_url: "portfolio_pic.jpeg",
    }
  ];

  return (
    <div className="text-white mt-24 font-[Poppins] w-full bg-[#080808]">
      <div className="flex max-w-[800px] flex-col mb-16">
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
          <div className="flex justify-center h-full">
            <div className="bg-gray-800 flex flex-col justify-between items-center w-full max-w-[350px] min-w-[250px] h-auto p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4">
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
              />
              <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-center">{project.title}</h2>
                <p className="text-sm text-gray-400 mb-4 text-justify">
                  {project.description}
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
                <a
                  href={project.url}
                  className="mt-auto inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Source Code
                </a>
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