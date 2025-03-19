import React from 'react';
import Card_slider from '../components/layout/Card_slider';
import '../styles/Component.css';
import Present_home from '../components/layout/Present_home';
import '../styles/index.css';
import Chatpresent_home from '../components/layout/Chatpresent_home';

// arreglar el slider en vista movil

const Homepage = () => {
    return (
    <div className='contenedor relative'>
      <div className='sticky top-0 h-screen flex flex-col'>
        <section className='element_margin'>
          <h1 className='float'>Néstor Álvarez Pareja</h1>
          <p className='m-10'>Que te trae por aquí ?</p>
        </section>
        <section className='content-center m-20'>
          <Card_slider />
        </section>
      </div>
      <div className='sticky top-0 h-screen flex flex-col'>
        <section className='element_margin'>
          <Present_home />
        </section>
        
        
      </div>
      <div className='sticky top-0 h-screen flex flex-col'>
        
        <section className='element_margin'>
          <Chatpresent_home />
        </section>
      </div>
    </div>
    );
};

export default Homepage;