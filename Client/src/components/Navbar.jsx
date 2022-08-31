import React from "react";
import guide from "./Guidelines.pdf"
import { HiMenuAlt4 } from "react-icons/hi";
import logo from "../../images/smartETH.png";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="mr-60 flex-col flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 h-8 cursor-pointer" />
      </div>
      <ul className="text-xl text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ">
       
        <li>
          Connect Your Wallet First and Then 
        </li>
        <li className="ml-10 bg-[#3952e4] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          <a href="#services">
          Send</a>
        </li>
        <li className="ml-36">
          <a href={guide} download >
          <em className=" bg-[#43c447]  hover:bg-[#3649b4]">Click here</em>  to download guidelines </a>
        </li> 
      </ul>
      

    </nav>
  );
};

export default Navbar;
