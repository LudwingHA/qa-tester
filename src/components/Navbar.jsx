import React from 'react';
import qatester from '/qa-tester.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={qatester} alt="QATESTER Logo" className="h-20" />
          <span className="text-xl font-bold">QATESTER</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#objetivo" className="hover:text-blue-200 transition">Objetivo</a>
          <a href="#objetivos-especificos" className="hover:text-blue-200 transition">Objetivos Específicos</a>
          <a href="#mision-vision" className="hover:text-blue-200 transition">Misión y Visión</a>
          <a href="#breve" className="hover:text-blue-200 transition">Breve</a>
          <a href="#politicas" className="hover:text-blue-200 transition">Políticas</a>
          <a href="#contacto" className="hover:text-blue-200 transition">Contacto</a>
          <Link to={'/login'}>Login</Link>
        </div>
        <button className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;