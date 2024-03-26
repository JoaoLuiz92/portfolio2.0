import React from 'react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    imageSrc: './public/img/findjob.png',
    title: 'Find Job',
    description: 'Projeto onde o usuário (candidato ou recrutador) consegue anunciar vagas ou, candidatar-se para mesma. Projeto desenvolvido em HTML e CSS, Node.js e MySQL.',
  },
  {
    id: 2,
    imageSrc: './public/img/pathsystem.png',
    title: 'Path System',
    description: 'Projeto feito para empresa onde usei, Node.js (express.js e handlebars) e MySQL, onde o Path System ajuda a organização de clientes que fizeram o curso de brigadistas de incêndio (projeto feito especificamente para empresas de prevenção de incêndio).',
  },
  {
    id: 3,
    imageSrc: '/public/img/API.png',
    title: 'API Rest',
    description: 'API desenvolvida com Node.js (Adonis.js), usando banco de dados MySQL. O usuário tinha seu cadastro feito, sua senha era validada e criptografada (hash), depois obtinhamos todos dados feitos, e ele conseguiria vender e comprar itens.',
  },
  {
    id: 4,
    imageSrc: './public/img/Pro.png',
    title: 'Freelancer Desenv. Web',
    description: 'Site em desenvolvimento para empresa, na área de prevenção de incêndio. Frameworks usados: React.js, TailwindCSS',
  }, 
   {
    id: 5,
    imageSrc: './public/img/chabot.png',
    title: 'ChatBot API',
    description: 'Api Rest Desenvolvida para um teste técnico, onde foi feita a integração de uma API com um chatBot(IA), acontecendo uma interação entre usuario e o Bot. Api simples e basica, mais descomplicada possivel.',
  },
];
 
function Clients({ id, imageSrc, title, description }) {
  const history = useNavigate();

  const redirectToGitHub = () => {
    const githubUrls = {
      1: 'https://github.com/JoaoLuiz92/FindJob',
      2: 'https://github.com/JoaoLuiz92/PathSystem',
      3: 'https://github.com/JoaoLuiz92/bechallenge',
      4: 'https://github.com/JoaoLuiz92/ProprinsulPage',
      5: 'https://github.com/JoaoLuiz92/chatBot',
    };

    const githubUrl = githubUrls[id];
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    } else {
      // Handle the case where GitHub URL is not available
      console.error('GitHub URL not found for project ID:', id);
    }
  };

  return (
    <div className='rounded-lg items-center flex flex-col border-4 justify-center mb-4 h-full overflow-hidden transition duration-300 cursor-pointer transform hover:scale-105 hover:border-blue-500' style={{ background: 'rgb(5, 8, 22)' }}>
      <img className='w-full mb-4 md:w-40 h-[170px] shadow-sm rounded-lg items-center ' src={imageSrc} alt='' />
      <h1 className='w-full font-bold text-center p-2 text-[30px] text-white'>{title}</h1>
      <div className='w-full text-white text-center text-[20px] pb-2'>{description}</div>
      <button onClick={redirectToGitHub} className='bg-gray-500 m-4 text-white font-bold py-2 px-4 rounded mt-2 hover:bg-blue-700'>
        Acessar Repositorio
      </button>
    </div>
  );
}

function ProjectList() {
  return (
    <div className='mb-8'>
      <h1 className='text-6xl m-8 font-bold font-serif text-center mb-10 text-white'>Projetos</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto my-8' style={{ background: 'rgb(5, 8, 22)' }} id='Climg'>
        {projects.map((project) => (
          <Clients key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export { Clients, ProjectList };


/*const Clients = () => {


  return (
    <section  id='Clients' style={{
      background:'rgb(5, 8, 22)'
    }}>
      <div className="  flex flex-col items-center text-center ">
        <h1 className="title-font sm:text-4x1 text-[40px] mx-auto mb-4 pb-16 pt-8 font-medium text-black">
          Projetos
        </h1>

          <div className='flex justify-between max-w-4xl' id="Climg" >

          <div className='rounded-lg items-center flex flex-col border-4 justify-center'>
          <img className='w-full mb-4 md:w-40 shadow-sm  rounded-lg items-center transition
           duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/findjob.png' alt='asas'/>
          <h1 className='font-bold p-2 text-white'>Find Job</h1>
          <p className='text-white text-[17px]'>
          Projeto onde o usuario (candidato ou recrutador) consegue anunciar vagas ou,
          candidatar-se para mesma. Projeto desenvolvido em HTML e CSS, Node.js e MySQL.
          </p>
          </div>

          <div className='rounded-lg items-center flex flex-col border-4 justify-center'>
          <img className='w-full mb-4 md:w-40 shadow-sm  rounded-lg items-center transition
           duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/pathsystem.png' alt=''/>
          <h1 className='font-bold p-2 text-white'>Path System</h1>
          <p className='text-white text-[17px]'>
          Projeto feito para empresa onde usei, Node.js(express.js e handlebars) e MySQL, onde o Path System ajuda a organização de clientes
           que fizeram o curso de brigadistas de incendio (projeto feito especifico para empresas de prevenção de incendio)
          </p>
          </div>
        </div>
        </div>

    </section>
    
  )
}*/

export default {Clients, ProjectList}

