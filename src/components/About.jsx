import { color } from 'framer-motion'
import React from 'react'


const About = () => {

  return (
    <section id="About" style={{
      opacity:0.9,
      background:`url(../public/img/bkg.png) center/cover no-repeat fixed`
    }} >
    <div 
       className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
      <div className="lg:flex-grow font-serif md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fade">
        <h1 className="title-font sm:text-4x1  text-3xl mb-4  text-white">
          Seja bem-vindo(a) me chamo  <span className='font-bold font-serif'><br/> João Luiz Da Rosa Jr.</span>
       
        </h1>

       <p className="mb-8 leading-relaxed font-sans text-[20px] text-white">
       Olá,sou um entusiasta e profissional da 
       área de Tecnologia da Informação. Minha jornada no mundo da tecnologia começou com uma paixão por criar soluções
       inovadoras e eficientes. Atualmente, meu conjunto de habilidades inclui expertise em diversas tecnologias,
       proporcionando uma base sólida para enfrentar desafios e contribuir para projetos inovadores.<br/>
       
       Estou pronto para enfrentar novos desafios e agregar valor aos projetos em que me envolvo. 
       Sinta-se à vontade para explorar meu portfólio e entrar em contato para discutir oportunidades de colaboração!
        </p>
        <div className="flex justify-center font-sans">
          <a
            href="./public/img/cv.docx"
            download="cv.docx"
            className=" border-none rounded-lg text-white bg-green-500 py-2 px-6 
            text-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1
            hover:scale-110 hover:text-black hover:bg-white duration-500">
            Currículo (CV)
          </a>
      </div>
     </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-fade" id="imgAbout" >
        <img
          className="object-cover object-center rounded-full border-4 origin-center "
          style={{
            border:'full',
            borderColor:'green'
          }}
          alt="hero"
          src="./public/img/aboutpicture.png"
          
        />
      </div>
    </div>
  </section>
  )
}

export default About