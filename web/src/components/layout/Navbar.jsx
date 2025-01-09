import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex space-x-4">
                <li><a href="#about" className="text-white hover:text-gray-300">Sobre mí</a></li>
                <li><a href="#projects" className="text-white hover:text-gray-300">Proyectos</a></li>
                <li><a href="#contact" className="text-white hover:text-gray-300">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;