import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";


const Footer = () => {
  return (
    <footer>
      <div className="social-icons flex p-4 gap-4">
      <a href="https://www.instagram.com/proprinsulextintores/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='w-6 h-6' />
        </a>
        <a href="https://www.instagram.com/seu_usuario/" target="_blank" rel="noopener noreferrer">
        <CiLinkedin className='w-6 h-6' />
        </a>
        <a href="https://www.instagram.com/seu_usuario/" target="_blank" rel="noopener noreferrer">
        <CiFacebook className='w-6 h-6'/>
        </a>
      </div>
      <p className='font-serif text-center'>&copy; 2024 Proprinsul Ltda. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer