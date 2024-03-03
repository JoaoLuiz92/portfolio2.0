/* eslint-disable no-unused-vars */

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Navbar() {
  return (
    <header className="  md:static fixed top-0 z-10 w-full" style={{background:'rgb(5, 8, 22)'}}>
      <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center scroll-smooth">
      <a href="#" className="flex items-center rtl:space-x-reverse">
          <img src='./public/img/logo.png' alt='logo' className='h-28 mr-2'/>
          <span className="text-4x1 font-semibold dark:text-white">
            <p className="font-medium text-2x1">
              Desenvolvedor <span className="" style={{color:'rgb(23, 173, 4)'}}>Fullstack</span>
            </p>
          </span>
        </a>
        <nav className="md:mr-auto md:ml-4 p-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base font-serif justify-center">
          <a href="#About" className="p-2 text-white hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg ">
            Sobre Mim
          </a>
          <a href="#Services" className="p-2 text-white hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg ">
            Projetos
          </a>
          <a href="#Clients" className="p-2 text-white hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg ">
            
            Experiências
          </a>
          <a href="#Clients" className="p-2 text-white hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg ">
            
            Contato
          </a>
        </nav>
        <div className=" flex justify-around p-6 space-x-5">
        <a href="https://wa.me/5553999037382"
         target="blank" 
         rel="noopener noreferrer"
         >
        <FaWhatsapp  className="w-10 h-10" style={{
          color: 'rgb(23, 173, 4)'
        }}/>
        </a>
        <a href="https://github.com/JoaoLuiz92"
          target="blank"
          rel="noopener noreferrer"
        >
        <FaGithub   className="w-10 h-10" style={{
          color: 'rgb(23, 173, 4)'
        }}/>
        </a>
        <a href="https://www.linkedin.com/in/joão-luiz-da-rosa-junior-69889521b/"
          target="blank"
          rel="noopener noreferrer"
        >
        <FaLinkedinIn  className="w-10 h-10" style={{
          color: 'rgb(23, 173, 4)'
        }}/>
        </a>

       </div>
      </div>
    </header>
  );
}



/*        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
          <div className="container mx-auto">
            <div className="w-full bg-white/50 h-[66px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex
            justify-between items-center text-2x1 text-white/50 ">           
              <Link to='#About' className='cursor-pointer 2-[60px] h-[60px] flex items-center justify-center'>
                <BiHomeAlt/>
              </Link>
              <Link className='cursor-pointer 2-[60px] h-[60px] flex items-center justify-center'>
                <BsClipboardData/>
              </Link>
              <Link className='cursor-pointer 2-[60px] h-[60px] flex items-center justify-center'>
                <BiUser/>
              </Link>
              <Link className='cursor-pointer 2-[60px] h-[60px] flex items-center justify-center'>
                <BsBriefcase/>
              </Link>
            </div>
          </div>
        </nav>
*/

