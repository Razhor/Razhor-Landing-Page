// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="w-screen bg-blue-500 text-white">
      <div className="flex justify-end">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Inicio</Link></li>
          <li><Link to="/servicios" className="hover:text-gray-300">Servicios</Link></li>
          <li><Link to="/acerca-de" className="hover:text-gray-300">Acerca de</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
