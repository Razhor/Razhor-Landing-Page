import React from 'react';

const Section = ({ title, content }) => {
  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="text-gray-700">{content}</div>
    </section>
  );
};

export default Section;
