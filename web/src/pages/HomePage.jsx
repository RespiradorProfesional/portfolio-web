import React from 'react';

const Homepage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Bienvenido a mi página</h1>
                <p className="text-xl mb-4">¡Aquí encontrarás información sobre mí y mis proyectos!</p>
                <p className="text-lg">Explora las secciones utilizando el menú de navegación.</p>
            </div>
        </div>
    );
};

export default Homepage;