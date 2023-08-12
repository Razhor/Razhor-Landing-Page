import React from 'react';

const Body = ({ children }) => {
  return (
    <main className="container mx-auto p-4 min-h-screen pt-16">
      {children}
    </main>
  );
};

export default Body;
