import React from "react";

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

  return (
    <div className="text-white bg-[#080808] mt-4 font-[Poppins] w-full">
        <h3 className="lg:hidden pt-24 text-3xl font-medium sm:text-[36px] sm:font-[700] md:text-[45px] md:font-[600] pl-10">About Me</h3>
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-28">
        <div className="flex flex-col justify-center px-12">
            <h3 className="hidden lg:block lg:pt-24 lg:text-[45px] lg:font-[700]">About Me</h3>
            <h3 className="text-[22px] font-[400] lg:pt-10">hey, I'm <span className="font-[600]">Hashir Shaikh Suleman</span></h3>
            <p className="text-[18px] font-[400] pt-6 text-gray-400">
                Hello! I am a Computer Science Undergraduate at PES University, Bangalore. I am currently in 6th semester. I am passionate about competitive programming and web development. i have been coding problems for about 3 years now and i enjoy it even more now as i deep diver into interesting data structures and algorithms. i have also had a keen interest in web development, and in the recent times i have been working on my development skills as well, always learning new things. apart from tech and coding hobbies, i truly enjoy playing outdoor sports, especially basketball. i have been a steph curry fan always!<br/>Keep following me, i will be sharing my journey as a developer here time to time
            </p>
        </div>
        <img src = "CodingPic.jpg" alt = "coding picture" className=" pt-10 lg:pt-48 mx-auto lg:pr-10 h-full object-cover order-first lg:order-none"/>
      </div>

    {/* Tech skills */}

    <h1 className="pt-28 text-[22px] font-[600] text-center mx-auto">Tech Skills</h1>
    <div className="flex flex-wrap justify-center pt-10 gap-4">
        {skills.map((skill) => (
                <div key={skill.name} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center  w-20 sm:w-40 hover:rounded-full hover:bg-white hover:text-black">
                    <img src={skill.url} alt={skill.name} className="h-8 w-8 sm:h-12 sm:w-12 object-contain" />
                    <h2 className="mt-4 text-xs sm:text-lg font-medium">{skill.name}</h2>
                </div>
                ))}
    </div>
        

    </div>
  );
}

export default About;