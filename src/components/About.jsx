import React from "react";

function About() {
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
    </div>
  );
}

export default About;