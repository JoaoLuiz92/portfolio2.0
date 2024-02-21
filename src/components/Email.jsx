import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === "" || email === "" || message === ""){
        alert('Preencha todos os campos corretamente');
        return;
    }
    console.log(formData);
        setFormData({
      name: '',
      email: '',
      message: '',
    });
  };


  return (

   <div className='bg-blue-950'> 
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <h1 className=' font-serif text-white sm:text-3x1 text-[30px] text-center'>
            Entre em contato:
        </h1>
        <label htmlFor="name" className="block text-white font-serif text-sm font-bold mb-2">
          Nome:
        </label>
        <input
          type="text"
          id="name"
          placeholder='Digite Seu Nome'
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder='Digite Seu Email'
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
          Mensagem:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder='Digite Sua Mensagem'
          value={formData.message}
          onChange={handleChange}
          className=" p-2 h-[150px] w-full border rounded-md"
          required
        />
      </div>

      <button
      onClick={handleSubmit}
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Enviar Mensagem
      </button>
    </form>
    </div>
  );
};

export default ContactForm;