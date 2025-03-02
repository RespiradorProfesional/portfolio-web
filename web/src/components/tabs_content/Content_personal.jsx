import React from 'react';

const Content_personal = () => {
    const newLocal = "font-semibold text-blue-500";
    return (
        <div className="max-w-3xl mx-auto mt-10 mb-20 p-6 shadow-lg rounded-lg text-center border-4 border-blue-500">
            <h1 className="text-4xl font-bold mt-4 text-white">¡Hola! Soy Néstor</h1>
            <p className="text-lg text-white mt-2">
                Soy un <span className={newLocal}>desarrollador de software</span> apasionado por la tecnología y la creación de experiencias digitales únicas.
                Me especializo en <span className={newLocal}>React, Kotlin y desarrollo de IA</span>.
            </p>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold ">¿Qué me motiva?</h2>
                <p className="text-white mt-2">
                    Me encanta aprender nuevas tecnologías, trabajar en proyectos innovadores y crear aplicaciones que realmente aporten valor.
                    Disfruto especialmente <span className={newLocal}>desarrollar videojuegos y explorar la inteligencia artificial</span>.
                </p>
            </div>
        </div>
    );
};

export default Content_personal;