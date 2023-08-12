// Header.jsx
import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Razhor</Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;