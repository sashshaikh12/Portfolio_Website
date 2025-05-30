import React from "react";
import { ReactTyped } from "react-typed";

function Preloading() {
    return(
        <div className="text-white flex justify-center items-center h-screen bg-black">
            <ReactTyped strings={["Welcome to Hashir's portfolio", "Thank you for visiting!", "Loading your personalized experience..."]} typeSpeed={35} backSpeed={30} className="pt-6 text-base sm:text-3xl  md:pt-5 font-[Poppins] md:text-[32px] md:font-[400]" />
        </div>
    );
};

export default Preloading;