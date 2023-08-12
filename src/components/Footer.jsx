import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p>Razhor Inc. &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
