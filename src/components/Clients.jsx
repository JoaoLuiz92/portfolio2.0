import React from 'react'

const Clients = () => {
  return (
    <section className='bg-white'>
      <div>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4x1 text-3xl mb-4 pb-6 pt-8 font-medium text-white">
          Nossos Clientes
        </h1>
        <div className='flex h-[100vh] w-[100vh]'>
        <div className='flex mx-auto items-center p-4 space-x-10 space-y-6 flex-wrap lg:flex-no-wrap justify-around ' >
          <img className='lg:w-[100px] w-full mb-4 pl-2 mx-10' src='./public/img/yara.png' alt=''/>
          <img className='lg:w-40 w-full mb-4' src='./public/img/aes.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/bunge.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/ccgl.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/embaixador.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/josapar.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/prefeiturapelotas.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/prefeiturariogrande.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/rgfert.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/pirafert.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/unifert.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/tanac.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4 bg-none' src='./public/img/csn.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/sj.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/espacoutil.png' alt=''/>
          <img className='lg:w-1/5 w-full mb-4' src='./public/img/shopppraca.png' alt=''/>
        </div>
        </div>
        <p className='title-font sm:text-3x1 text-2xl mb-4 pb-4 font-medium text-white'>
          <br className="hidden lg:inline-block" />
          Deixe-nos tornar as coisas melhores para você. Garantimos a nossa responsabilidade.<br/>
          </p>
        <div className="flex justify-center">
          <button
            href="#projects"
            className=" border-none rounded-lg text-white bg-blue-900 py-2 px-6 text-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black hover:bg-white duration-500">
            Quem Somos 
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded origin-center "
          alt="hero"
          src=""
          
        />
      </div>
      </div>

    </section>
  )
}

export default Clients