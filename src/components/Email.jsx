import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgbepz");
  if (state.succeeded) {
      return <p className='text-red-700 text-[20px] font-serif text-center ' > Obrigado pelo seu contato! Proprinsul Extintores</p>;
  }
  return (
      <div className=' bg-blue-950'>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
        <div className='mb-4'>
          <h1 className=' font-serif text-white sm:text-3x1 text-[30px] text-center'>
            Entre em contato
          </h1>
        <div className='mb-4'>
          <label htmlFor="username"  className="block text-white font-serif text-sm font-bold mb-2">
          Nome :
        </label>
        <input
          id="name"
          type="name" 
          name="username"
          className='h-[25px] w-full rounded-md'
          placeholder='  Digite seu nome'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}/>
        </div>

        <label htmlFor="email"  className="block text-white font-serif text-sm font-bold mb-2">
          Email :
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className='h-[25px] w-full rounded-md'
          placeholder='  Digite seu email'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div className='mb-4'>
      <label htmlFor="message"  className="block text-white font-serif text-sm font-bold mb-2">
          Mensagem :
        </label>
        <input
          id="message"
          type="message" 
          name="message"
          placeholder='  Digite sua mensagem'
          className='p-2 h-[150px] w-full border rounded-md'
          style={{paddingTop: '10px'}}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        </div>
        <button type="submit" disabled={state.submitting}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mb-4"  
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
);
}
function App() {
return (
  <ContactForm />
);


}



export default ContactForm;