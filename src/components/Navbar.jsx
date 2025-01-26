import React,{useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {

    const [showMenu, setShowMenu] = useState(true);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    };

  return (
    <div className="sticky top-0 z-10 text-white flex justify-between items-center w-full max-w-none mx-auto px-4 bg-[#080808]  font-[Poppins] text-[15px] font-[500]">
        <a href="/"><img src = "namelogo.avif" alt = "logo picture" className="h-20 hover:cursor-pointer" /></a>
        <ul className="hidden lg:flex flex-1 justify-center space-x-4 flex-wrap"> 
            <a href = "#About"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">About Me</li></a>
            <a href = "#Experience"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">Experience</li></a>
            <a href = "#Projects"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">Projects</li></a>
            <a href = "#Education"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">Education</li></a>
            <a href = "#Certifications"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">Certifications</li></a>
            <a href = "#Contact"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">Contact</li></a>
        </ul>
        <a href="https://drive.google.com/file/d/1YAPP8R59e5zHDXWGUG4RyST61aZZZh8a/view?usp=sharing" className="hidden lg:block p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">Resume</a>
        <div className="block lg:hidden">
            {showMenu ? <GiHamburgerMenu size={20} onClick={handleMenu}/> : <IoCloseSharp size={20} onClick={handleMenu}/>}
        </div>
        <div className={`fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#080808] ease-in-out duration-500 ${
          !showMenu ? "translate-x-0" : "-translate-x-full"
        }`}>
            <img src = "namelogo.avif" alt = "logo picture" className="h-20 m-4 hover:cursor-pointer" />
            <ul className="uppercase p-4 " onClick={handleMenu}>
                <a href = "#About"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">About Me</li></a>
                <a href = "#Experience"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">Experience</li></a>
                <a href = "#Projects"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">Projects</li></a>
                <a href = "#Education"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">Education</li></a>
                <a href = "#Certifications"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">Certifications</li></a>
                <a href = "#Contact"><li className="p-4 hover:bg-gray-700 hover:rounded-xl hover:cursor-pointer">Contact</li></a>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;