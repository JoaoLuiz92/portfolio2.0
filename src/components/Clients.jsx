import React from 'react'
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Clients = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.from('#Climg', {
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '#Climg',
        start: 'top 18%', 
        end: 'top 80%', 
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
    <section className='bg-white '  id='Clients'>
     
      <div className="  flex flex-col items-center text-center ">
        <h1 className="title-font sm:text-4x1 text-[30px] mx-auto mb-4 pb-16 pt-8 font-medium text-black">
          Nossos Clientes
        </h1>
        <div className='flex w-[120vh] items-center p-4 space-x-10 space-y-10 flex-wrap lg:flex-no-wrap justify-around mx-auto ' id="Climg" >
          <img className='lg:w-[100px] w-full mb-4 pl-2 mx-10 cursor-pointer shadow-sm border-r-2 items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/yaraa.png' alt=''/>
          <img className='lg:w-40 w-full mb-4   shadow-sm border-r-2 rounded-lg cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500  ' src='./public/img/aes.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4  shadow-sm border-r-2 rounded-lg  cursor-pointer items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/bunge.png ' alt=''/>
          <img className='lg:w-1/5 w-full mb-4  shadow-sm border-r-2 rounded-lg cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/ccgl.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/embaixador.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4  shadow-sm border-r-2 rounded-lg cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/josapar.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4  shadow-sm border-r-2 rounded-lg cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/prefeiturapelotas.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4  shadow-sm border-r-2 rounded-lg cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/prefeiturariogrande.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg  cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/rgfert.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4  shadow-sm border-r-2 rounded-lg cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/pirafert.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/unifert.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg  cursor-pointer items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/tanac.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg  cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500 bg-none' src='./public/img/csn.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/sj.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg  cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/espacoutil.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg  cursor-pointer  items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/shopppraca.png' alt=''/>
        </div>
        </div>
        <div className='title-font justify-center sm:text-3x1 text-2xl mb-4 pt-10 pb-4 font-medium flex mx-auto text-black'>
        <p >
          <br className="hidden lg:inline-block" />
          Deixe-nos tornar as coisas melhores para você. Garantimos a nossa responsabilidade.<br/>
          </p>
          </div>
          <div className='title-font justify-center sm:text-3x1 text-[40px] mb-4 pt-10 pb-4 font-medium flex mx-auto text-black'>
            <p>
              Depoimentos De Clientes
            </p>
            </div>
            <div className='text-[20px] mx-auto sm:text-3x1 text-2xl mb-4 pb-4 font-medium text-black'>
            <p className='pt-4 pl-4 mx-auto flex justify-center'>
              Temos uma grande preocupação com a satisfação dos nosso clientes.
            </p>
            <p className='pl-10 flex justify-center'>
              Abaixo, veja alguns depoimentos de clientes e o cuidado de nossa equipe especializada em atendimento pós venda.
            </p>

            <div className=' flex flex-col items-center text-center align-top'>
              <div className='flex w-screen items-center p-4 space-x-10 space-y-10 flex-wrap lg:flex-no-wrap justify-around mx-auto animate-fade '>
                  <img onclick="openPopup('./public/img/dp1.png')" className='lg:w-1/5 w-full mb-4 shadow-sm border-r-1 rounded-lg rounded-r-2  cursor-pointer  items-center 
                  transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/dp1.png' alt='' />

                  <img onclick="openPopup('./public/img/dp2.png')" className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg  cursor-pointer  items-center
                  transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/dp2.png' alt='' />

                  <img onclick="openPopup('./public/img/dp3.png')" className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg  cursor-pointer  items-center
                  transition duration-300 transform hover:scale-105 hover:border-blue-500'src='./public/img/dp3.png' alt='' />

                  <img onclick="openPopup('./public/img/dp4.png')" className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg  cursor-pointer  items-center 
                  transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/dp4.png' alt='' />

                  <img onclick="openPopup('./public/img/dp5.png')" className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg  cursor-pointer  items-center 
                  transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/dp5.png' alt='' />

                  <img onclick="openPopup('./public/img/dp6.png')" className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg  cursor-pointer  items-center 
                  transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/dp6.png' alt='' />

                  <img onclick="openPopup('./public/img/dp.png')" className='lg:w-1/5 w-full mb-4 shadow-sm border-r-2 rounded-lg  cursor-pointer  items-center
                  transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/dp7.png' alt='' />
              </div>

            </div>
            </div>

    </section>
  )
}

export default Clients