import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 top-0 left-0 w-full z-50 shadow-lg">
            <div className="flex justify-center items-center">
 
                {/* Enlaces de navegación */}
                <ul className="flex">
                    <li>
                        <a href="#home" className="text-white hover:text-gray-300 mx-30">Inicio</a>
                    </li>
                    <li>
                        <a href="#about" className="text-white hover:text-gray-300 mx-30">Sobre mí</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-white hover:text-gray-300 mx-30">Proyectos</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white hover:text-gray-300 mx-30">Experiencia</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white hover:text-gray-300 mx-30">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;