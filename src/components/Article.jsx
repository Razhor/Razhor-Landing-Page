import React from 'react';

const Article = ({ title, content }) => {
  return (
    <article className="bg-white p-4 shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </article>
  );
};

export default Article;
