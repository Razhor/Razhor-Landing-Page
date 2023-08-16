import React from 'react';

const Section = () => {
  return (
    <div className="bg-white p-4">
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">¿Quienes somos?</h2>
        <div className="text-gray-700">
          Somos un equipo apasionado de profesionales en el mundo del desarrollo
          web y el diseño de interfaces de usuario. En Razhor, estamos unidos
          por nuestra dedicación para transformar las visiones empresariales en
          realidades digitales. Nuestra experiencia en tecnologías web y diseño
          nos permite ofrecer soluciones innovadoras y funcionales que impulsan
          el éxito de nuestros clientes.
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Vision</h2>
        <div className="text-gray-700">
          Nuestro enfoque se centra en la creación de interfaces de usuario
          sorprendentes y funcionales utilizando las tecnologías más avanzadas.
          Nos especializamos en la construcción de front-end utilizando React,
          una de las bibliotecas de JavaScript más populares y potentes,
          combinada con la estética moderna de Tailwind CSS para brindar
          resultados impresionantes.
        </div>
      </section>
    </div>
  );
};

export default Section;
