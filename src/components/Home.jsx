import React from 'react';
import Section from './Section';
import Article from './Article';

const Home = () => {
  return (
    <div>
      <div className="bg-white p-4">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          ¡Soluciones Digitales!
        </h2>
        <p className="mb-6 text-lg font-normal text-gray-700">
          En Razhor, estamos dedicados a llevar tus ideas de negocio al mundo
          digital con soluciones web de vanguardia. Somos apasionados por la
          creación de experiencias en línea excepcionales que no solo cautivan a
          tus clientes, sino que también impulsan el crecimiento de tu negocio.
        </p>
      </div>
      <Section />
      <Article />
    </div>
  );
};

export default Home;
