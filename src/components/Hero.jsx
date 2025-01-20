import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {

    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-100px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
                <img src = "hashirPic.jpg" alt = "hashir's picture" className="h-64 w-64 rounded-full" />
                <h5 className="font-[Poppins] text-[20px] font-[500] pt-4">Hello, I'm Hashir Shaikh Suleman</h5>
                <ReactTyped strings={["Competitive Programmer", "Web Developer", "Machine Learning Enthusiast"]} typeSpeed={80} backSpeed={90} loop className="pt-5 font-[Poppins] text-[44px] font-[700]" />
                <p className="pt-4 font-[Poppins] text-[17px] font-400] text-gray-400">I'm a 3rd Year undergraduate student at PES University, Bangalore</p>
                <p className="pt-4 font-[Poppins] text-[17px] font-400] text-gray-400">I pursue Computer Science Engineering and coding is my hobby!!!</p>
            </div>
        </div>
    );

};

export default Hero;