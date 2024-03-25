import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
    <div className="social-icons flex p-4 gap-4 justify-center" style={{
        color:'rgb(2, 210, 2)'
      }}>
      <a href="https://www.instagram.com/joaoluizjr92/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='w-6 h-6' />
      </a>
      <a href="https://wa.me/5553999037382" target="blank" rel="noopener noreferrer" style={{
        color:'rgb(2, 210, 2)'
      }}>
        <FaWhatsapp className='w-6 h-6' />
      </a>
      <a href="https://www.linkedin.com/in/joão-luiz-da-rosa-junior-69889521b/" target="_blank" rel="noopener noreferrer" style={{
        color:'rgb(2, 210, 2)'
      }}>
        <FaLinkedinIn className='w-6 h-6'/>
      </a>
    </div>
    <p className='font-serif font-bold text-center' style={{
        color:'rgb(2, 210, 2)'
      }}
      >&copy; 2024 João L. Da Rosa Jr. Todos os direitos reservados.</p>
    
    <div className='flex flex-col justify-end items-center'>
      <p className=' font-light text-end pr-6 pt-2'style={{
        color:'rgb(2, 210, 2)'
      }}>
        Desenvolvedor João L. Da Rosa Jr
      </p>
      <div>
        <a href="https://www.linkedin.com/in/joão-luiz-da-rosa-junior-69889521b/" target="_blank" rel="noopener noreferrer" style={{
        color:'rgb(2, 210, 2)'
      }}>
          <FaLinkedin className='w-6 h-6'/>
        </a>
      </div>
    </div>
  </footer>
    );
};

export default Footer