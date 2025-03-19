import React from 'react';

import '../styles/index.css';
import Navbar from '../components/common/Navbar';
import Header_section from '../components/common/header_sections';
import Tabs from '../components/common/Tabs';
import Content_personal from '../components/tabs_content/Content_Personal';
import Content_abilities from '../components/tabs_content/Content_Abilities';
import Content_courses from '../components/tabs_content/Content_Courses';
import Content_project from '../components/tabs_content/Content_project';


const timelineData = [
    { title: "Inicio", description: "Comenzamos el proyecto", date: "2024-01-01" },
    { title: "Diseño", description: "Creamos los primeros bocetos", date: "2024-02-15" },
    { title: "Desarrollo", description: "Empezamos a programar", date: "2024-03-10" },
    { title: "Testing", description: "Probamos y corregimos errores", date: "2024-04-05" },
    { title: "Lanzamiento", description: "Publicamos la versión final", date: "2024-05-20" }
  ];

const ExperiencePage = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <Navbar />
            <Header_section title={"Experiencia"}/>
            <div className="relative flex flex-col items-center space-y-8">
                {/* Línea vertical */}
                <div className="absolute left-1/2 transform -translate-x-1 w-1 h-full bg-gray-400"></div>

                {timelineData.map((event, index) => (
                    <div 
                    key={index} 
                    className={`relative flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    >
                        {/* Tarjeta del evento */}
                        <a className={`bg-white p-4 rounded-lg shadow-md border w-64 transition-all duration-300 hover:scale-105
                            ${index % 2 === 0 ? 'ml-72 text-left' : 'mr-72 text-right'}`}>
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                            <p className="text-sm text-gray-500">{event.description}</p>
                            <span className="block text-xs mt-2 text-gray-400">{event.date}</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencePage;