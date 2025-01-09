import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl font-bold mb-4">Sobre mí</h1>
                <p className="text-xl mb-4">
                    ¡Hola! Soy un desarrollador apasionado por la creación de aplicaciones web y móviles.
                    Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente.
                </p>
                <p className="text-lg">
                    En esta página encontrarás más detalles sobre mis proyectos y mi experiencia.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;