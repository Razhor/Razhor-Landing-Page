import React from 'react';
import Section from './Section';
import Article from './Article';

const Home = () => {
  return (
    <div>
      <div className="bg-white p-4">
        <h2 className="text-2xl font-semibold mb-2">Página de Inicio</h2>
        <p className="text-gray-700">
          Bienvenido a nuestra página.
        </p>
      </div>
      <Section
        title="¿Quienes somos?"
        content="Una empresa dedicada a ofrecer soluciones Web...."
      />
      <Section
        title="Nuestros Servicios"
        content="Ofrecemos una amplia gama de servicios para satisfacer las necesidades de nuestros clientes..."
      />
      <Article
        title="Nuevo artículo"
        content="Este es un nuevo artículo sobre un tema interesante..."
      />
    </div>
  );
};

export default Home;
