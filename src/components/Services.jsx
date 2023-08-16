import React from "react";

const Servicios = () => {
  return (
    <div className="p-8">
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Nuestros Servicios
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-700">
          Ofrecemos una amplia gama de servicios para satisfacer tus
          necesidades. Desde desarrollo web hasta consultoría empresarial,
          estamos aquí para ayudarte.
        </p>
      </div>

      <div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-2">
            Desarrollo Front-End con React y Tailwind CSS
          </h2>
          <p className="text-gray-700">
            Nuestra especialidad radica en la creación de interfaces de usuario
            atractivas y receptivas utilizando React, una biblioteca de
            JavaScript líder en la industria. Combinamos la elegancia del diseño
            moderno con la potencia de Tailwind CSS para entregar experiencias
            visuales impresionantes y altamente funcionales.
          </p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-2">
            Diseño de Experiencia de Usuario (UX)
          </h2>
          <p className="text-gray-700">
            Sabemos que un diseño excepcional es más que simplemente lo que se
            ve en la pantalla. Nuestros diseñadores de UX se esfuerzan por
            comprender las necesidades y deseos de tus usuarios, creando flujos
            de trabajo intuitivos y agradables que aseguran una experiencia de
            usuario inolvidable.
          </p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-2">
            Desarrollo a la Medida
          </h2>
          <p className="text-gray-700">
            Cada negocio es único, por lo que ofrecemos soluciones de desarrollo
            web personalizadas que se adaptan a tus objetivos específicos. Ya
            sea una tienda en línea, una plataforma de reserva o un portal de
            contenido, estamos preparados para enfrentar cualquier desafío de
            desarrollo.
          </p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-2">
            Optimización y Rendimiento
          </h2>
          <p className="text-gray-700">
            La velocidad y el rendimiento son esenciales en la web actual. Nos
            aseguramos de que tus sitios web no solo se vean bien, sino que
            también funcionen a la perfección en diferentes dispositivos y
            velocidades de conexión, brindando una experiencia óptima para todos
            tus usuarios.
          </p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-2">
            Consultoría Tecnológica
          </h2>
          <p className="text-gray-700">
            No solo construimos sitios web, sino que también asesoramos. Si
            tienes preguntas sobre tecnologías web, mejores prácticas de diseño
            o estrategias de desarrollo, estamos aquí para proporcionarte
            conocimientos y orientación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
