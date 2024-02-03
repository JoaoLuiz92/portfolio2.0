import React from 'react'
import {Link} from 'react-router-dom'
import { FaFireExtinguisher } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { GiSolderingIron } from "react-icons/gi";
import { FaFire } from "react-icons/fa";


const Services = () => {
  return (
  <section id='Services' style={{ backgroundImage: 'linear-gradient(rgba(255,0,0,0.7), rgba(255,0,0,0.7)), url(./public/fire.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center animate-fade'>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className='title-font sm:text-4x1 text-3xl mb-4 font-medium text-white'>
          Nossos Serviços
          </h1>
          <div className='flex justify-normal'>
        <div className='flex'>
         <span className=' text-[30px] text-white'><FaFire /></span>
        <p className='title-font pb-4 pl-4 sm:text-2x1 text-3xl mb-1 text-wrap m text-white'>
          Veja abaixo alguns de nossos serviços. Para consultar todos os serviços.
          </p>
          </div>
          </div>
        <ul className='text-[18px]'>
          <span className='flex text-white '>
          <FaFireExtinguisher/>
          <li className=" pl-2 text-left font-serif text-[15] text-white">Prevenção e combate a incêndios (PPCI, Extintores, hidrante, iluminação de emergência,
           alarme de incêndio, sprinklers, e outros);</li>
         </span>
         <span className='flex text-white pt-1'>
         <MdElectricBolt />
          <li className=" pl-2 text-left font-serif text-[15] text-white">Elétrica comercial e industrial;</li>
          </span>
          <span className='flex text-white '>
          <FaHome />
          <li className=" pl-2 text-left font-serif text-[15] text-white">Regularização de imóveis;</li>
          </span>
          <span className='flex text-white '>
          <FaBook />
          <li className=" pl-2 text-left font-serif text-[15] text-white">Treinamentos;</li>
          </span>
          <span className='flex text-white '>
          <FaGear />
          <li className=" pl-2 text-left font-serif text-[15] text-white">Laudos técnicos (Engenharia Mecânica, Civil e Elétrica);</li>
          </span>
          <span className='flex text-white '>
          <MdOutlineSettingsInputAntenna />
          <li className=" pl-2 text-left font-serif text-[15] text-white">SPDA;</li>
          </span>
          <span className='flex text-white '>
          <GiSolderingIron />
          <li className=" pl-2 text-left font-serif text-[15] text-white">Serralheria especializada nas normas dos bombeiros e acessibilidade.</li>
          </span>
          <div className=' pt-6'>
          <button
            href='https://drive.google.com/file/d/1jgVz-fnkC2M-UTgcHklJ82GwkPCKx4Cl/view'
            className="border-none rounded-lg items-center text-white bg-blue-900 py-2 px-6 text-lg shadow-lg
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black hover:bg-white duration-500">
            Saiba Mais
          </button>             
          </div>    
        </ul>
        <p className='pt-4 text-center title-font pb-4 pl-4 sm:text-2x1 text-2xl mb-1 text-wrap m text-white '>
          Se preferir, entre em contato para um atendimento personalizado, tire suas dúvidas e faça um orçamento gratuito.</p>
          <div className="flex justify-center">
          <button
            href="tel:+55 5332255270"
            className=" border-none rounded-lg items-center text-white bg-blue-900 py-2 px-6 text-lg shadow-lg
             transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black hover:bg-white duration-500">
            Contato
          </button>
        </div>

      </div>
      </div>
    </section>
  )
}

export default Services