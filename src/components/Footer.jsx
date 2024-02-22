import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";


const Footer = () => {
  return (
    <footer>
      <div className="social-icons flex p-4 gap-4">
      <a href="https://www.instagram.com/proprinsulextintores/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='w-6 h-6' />
        </a>
        <a href="https://wa.me/555332255270" target="blank" rel="noopener noreferrer">
        <FaWhatsapp className='w-6 h-6' />
        </a>
        <a to="https://www.facebook.com/proprinsulextintores" target="_blank" rel="noopener noreferrer">
        <CiFacebook className='w-6 h-6'/>
        </a>
      </div>
      <p className='font-serif text-center'>&copy; 2024 Proprinsul Ltda. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer