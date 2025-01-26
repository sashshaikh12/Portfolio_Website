import React from "react";
import {SiGithub, SiLinkedin, SiGmail, SiInstagram, SiCodeforces } from "react-icons/si";

function Contact(){

    return(
        <div className="text-white font-[Poppins] w-full">
            <div className="flex max-w-[800px] flex-col mb-16">
                <h1 className="pb-12 text-center sm:text-left sm:pl-16 pt-24 text-3xl font-medium sm:text-[36px] sm:font-[700] md:text-[45px] md:font-[600]">Contact</h1>
                <h3 className="text-center text-[18px] font-[400] pt-0 text-gray-400 sm:text-left sm:pl-16">Got an idea to build, a problem to solve, or just want to connect? I’m here for it all! From crafting seamless web experiences to diving into data or coding up solutions, let’s create something extraordinary together."</h3>
                <div className="flex justify-center sm:justify-start pt-4 space-x-10 mt-7 sm:pl-16">
                    <SiGithub  className="inline-block mt-7 icon-size hover:cursor-pointer hover-effect"/>
                    <SiLinkedin  className="inline-block mt-7 icon-size hover:cursor-pointer hover-effect"/>
                    <SiGmail  className="inline-block mt-7 icon-size hover:cursor-pointer hover-effect"/>
                    <SiInstagram  className="inline-block mt-7 icon-size hover:cursor-pointer hover-effect"/>
                    <SiCodeforces  className="inline-block mt-7 icon-size hover:cursor-pointer hover-effect"/>
                </div>
            </div>
        </div>
    );
};

export default Contact;