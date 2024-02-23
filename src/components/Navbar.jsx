
import React from "react";
import {Link} from 'react-router-dom'
import {BiHomeAlt, BiUser } from 'react-icons/bi';
import {BsClipboardData,BsBriefcase,BsChatSquare } from 'react-icons/bs';


export default function Navbar() {
  return (
    <header className=" bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center scroll-smooth">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src='./public/img/logo.png' alt='pornp logo' className='h-20'/>
          <span className="text-2xl font-semibold dark:text-white"></span>
        </a>
        <nav className="md:mr-auto md:ml-4 p-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base font-serif justify-center">
          <a href="#About" className="p-2 hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg hover:border-red-700">
            Quem Somos
          </a>
          <a href="#Services" className="p-2 hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg hover:border-red-700">
            Serviços
          </a>
          <a href="#Clients" className="p-2 hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg hover:border-red-700">
            
            Clientes
          </a>
          <a href="#Clients" className="p-2 hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg hover:border-red-700">
            
            Contato
          </a>
        </nav>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
             Login
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

