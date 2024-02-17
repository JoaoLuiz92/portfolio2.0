import React from 'react';
import ImageComponent from './ImageComponent'; // Certifique-se de ajustar o caminho do arquivo conforme necessário

const App = () => {
  return (
    <div className='flex flex-col items-center text-center align-top'>
      <div className='flex w-screen items-center p-4 space-x-10 space-y-10 flex-wrap lg:flex-no-wrap justify-around mx-auto animate-fade'>
        <ImageComponent imagePath='./public/img/dp1.png' />
        <ImageComponent imagePath='./public/img/dp2.png' />
        <ImageComponent imagePath='./public/img/dp3.png' />
        <ImageComponent imagePath='./public/img/dp4.png' />
        <ImageComponent imagePath='./public/img/dp5.png' />
        <ImageComponent imagePath='./public/img/dp6.png' />
        <ImageComponent imagePath='./public/img/dp7.png' />
      </div>
    </div>
  );
};

export default App;
