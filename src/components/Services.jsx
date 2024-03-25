import React from 'react'
import { FaGear } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";




const Services = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.from('#sv2', {
      opacity: 0,
      x: -100, 
      duration: 3,
      scrollTrigger: {
        trigger: '#sv2',
        start: 'left 80%', 
        end: 'left 50%', 
        scrub: true,
      },
    });

    gsap.from('#sv3', {
      opacity: 0,
      x: -100, 
      duration: 3,
      scrollTrigger: {
        trigger: '#sv3',
        start: 'left 80%', 
        end: 'left 50%', 
        scrub: true,
      },
    });

    gsap.from('#sv4', {
      opacity: 0,
      x: -100, 
      duration: 3,
      scrollTrigger: {
        trigger: '#sv4',
        start: 'left 80%', 
        end: 'left 50%', 
        scrub: true,
      },
    });

    gsap.from('#sv5', {
      opacity: 0,
      x: -100, 
      duration: 3,
      scrollTrigger: {
        trigger: '#sv5',
        start: 'left 80%', 
        end: 'left 50%', 
        scrub: true,
      },
    });


    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true);
      });
    };
  }, []); 


  return (
  <section id='Services' style={{
    background:'rgb(1, 27, 2)'
  }}>
    <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center '>
      <div className="lg:flex-grow flex flex-col md:items-start  md:text-left mb-16 md:mb-0 items-center text-center">
        <p className=' title-font sm:text-4x1 text-[40px] mb-4 pb-8 font-medium text-white' id="sv2">
          Frameworks
          </p>
          <div className='flex justify-normal'>
        <div className='flex'>
         <span className=' text-[30px] text-white pr-4 'id='sv3'><FaComputer /></span>
        <p className='title-font sm:text-3x1 text-2xl mb-4 pb-4 font-medium text-white' id="sv3">
          Veja abaixo alguns dos Frameworks estudados e aplicados em projetos!
          </p>
          </div>
          </div>
        <ul className='text-[18px] '  id="sv5">
          <span className='flex text-white '>
          <span className='text-[35px]'> 
          <FaHtml5 />
          </span>
          <li className=" pl-2 text-left font-serif text-[15] text-white m-2" id="sv4">
          HTML é uma linguagem de marcação usada para criar e estruturar conteúdo na web. ;</li>
         </span>
         <span className='flex text-white pt-1 '>
         <span className='text-[35px]'> 
         <FaCss3Alt />
         </span>
          <li className=" pl-2 text-left font-serif text-[15] text-white m-2">
          CSS é uma linguagem de estilo utilizada para designar a apresentação e o layout de documentos HTML.</li>
          </span>
          <span className='flex text-white  '>
          <span className='text-[35px]'> 
          <IoLogoJavascript />
          </span>
          <li className=" pl-2 text-left font-serif text-[15] text-white m-2">
          JavaScript (JS) é uma linguagem de programação de alto nível, interpretada e orientada a objetos, utilizada principalmente para tornar páginas web interativas.</li>
          </span>
          <span className='flex text-white '>
          <span className='text-[35px]'> 
          <FaNode />
          </span>
          <li className=" pl-2 text-left font-serif text-[15] text-white m-2">
          Node.js é um ambiente de tempo de execução JavaScript que permite a execução de código JavaScript no lado do servidor.</li>
          </span>
          <span className='flex text-white '>
          <span className='text-[35px]'> 
          <FaGear />
          </span>
          <li className=" pl-2 text-left font-serif text-[15] text-white m-2">
          API REST (Representational State Transfer) é um estilo arquitetural para desenvolver APIs que utiliza métodos HTTP (GET, POST, PUT, DELETE) para comunicação entre cliente e servidor, seguindo princípios como statelessness e utilização de URIs para representar recursos.</li>
          </span>
          <span className='flex text-white '>
          <span className='text-[45px]'> 
          <FaReact />
          </span>
          <li className=" pl-2 text-left font-serif text-[15] text-white m-2">
          React é uma biblioteca JavaScript de código aberto para construir interfaces de usuário, desenvolvida pelo Facebook, que permite a criação de componentes reutilizáveis e de alto desempenho.</li>
          </span>
          <span className='flex text-white '>
          <span className='text-[35px]'> 
          <SiTailwindcss />
          </span>
          <li className=" pl-2 text-left font-serif text-[15] text-white m-2">
          Tailwind CSS é um framework de design CSS utilitário que permite o desenvolvimento rápido e flexível de interfaces de usuário, utilizando classes predefinidas para estilização.</li>
          </span>
          <span className='flex text-white '>
          <span className='text-[45px]'> 
          <SiMysql />
          </span>
          <li className=" pl-2 text-left font-serif text-[15] text-white m-2">
          MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto amplamente utilizado para armazenar e gerenciar dados.</li>
          </span>

          <span>
            <p className=" pl-2 text-left font-serif text-[25px] text-white m-6 underline">
              Entre outras..
            </p>
          </span>
        </ul>
      </div>
      </div>
    </section>
  )
}

export default Services