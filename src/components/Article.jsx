import React from 'react';

const Article = ({ title, content }) => {
  return (
    <article className="bg-white p-4 shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Valores</h2>
        <p className="text-gray-700">En Razhor, nuestros valores son la base de todo lo que hacemos. Nos guían en cada proyecto y en cada interacción con nuestros clientes y socios. Creemos en la importancia de estos principios para construir relaciones sólidas y ofrecer resultados excepcionales:</p>
      <h2 className="text-xl font-bold pt-6 mb-2">Las Personas son primero</h2>
        <p className="text-gray-700">
En Razhor, valoramos ante todo a las personas. Desde nuestros clientes hasta nuestro talentoso equipo, priorizamos relaciones auténticas y empáticas. Nos esforzamos por generar un impacto positivo a través de soluciones tecnológicas significativas, mientras promovemos la diversidad, la equidad y el bienestar. Nuestra dedicación a este valor impulsa cada paso que damos en la búsqueda de un mundo digital más humano y conectado.</p>
      <h2 className="text-xl font-bold pt-6 mb-2">Compromiso con la Calidad</h2>
        <p className="text-gray-700">Buscamos la excelencia en cada detalle, superando expectativas con proyectos de calidad y funcionalidad excepcionales.</p>
      <h2 className="text-xl font-bold pt-6 mb-2">Colaboración Significativa</h2>
        <p className="text-gray-700">Valoramos la colaboración con clientes como socios, escuchando sus ideas y metas para lograr soluciones alineadas.</p>
      <h2 className="text-xl font-bold pt-6 mb-2">Transparencia y Honestidad</h2>
        <p className="text-gray-700">La comunicación abierta y la confianza son esenciales en cada paso, manteniéndote informado y comprometidos con la honestidad.</p>
      <h2 className="text-xl font-bold pt-6 mb-2">Pasión por el Aprendizaje</h2>
        <p className="text-gray-700">Abrazamos la evolución constante, manteniéndonos actualizados y comprometidos con ofrecer soluciones de vanguardia.</p>     

    </article>
  );
};

export default Article;
