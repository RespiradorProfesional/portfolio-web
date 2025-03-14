import React from 'react';

import '../styles/index.css';
import Navbar from '../components/common/Navbar';
import Header_section from '../components/common/header_sections';
import Tabs from '../components/common/Tabs';
import Content_personal from '../components/tabs_content/Content_Personal';
import Content_abilities from '../components/tabs_content/Content_Abilities';
import Content_courses from '../components/tabs_content/Content_Courses';

const tabs_content_about = [
    { id: "sobre-mi", label: "Sobre Mí", content: <Content_personal /> },
    { id: "habilidades", label: "Habilidades", content: <Content_abilities/> },
    { id: "titulos", label: "Titulos y cursos", content: <Content_courses/> }
];

const AboutPage = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <Navbar />
            <Header_section title={"Sobre mí"}/>
            <div className="flex flex-col items-center justify-center">
                <img className="size-64 rounded-full m-14" src="src\assets\images\dcff0ac0-ea78-4454-af10-c91ca344721a.jpg" alt="" />
                <div className="text-center max-w-2xl ">
                    <h1 className="text-4xl font-bold mb-4">Desarrollador de software y web</h1>
                    <p className="text-xl mb-4 text-blue-700">
                        ¡Hola!  un desarrollador apasionado por la creación de aplicaciones web y móviles.
                        Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente.
                    </p>
                    <p className="text-lg">
                        En esta página encontrarás más detalles sobre mis proyectos y mi experiencia.
                    </p>
                </div>
                <Tabs content={tabs_content_about}/>
            </div>
        </div>
    );
};

export default AboutPage;