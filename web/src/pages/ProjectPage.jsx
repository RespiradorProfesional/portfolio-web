import React from 'react';

import '../styles/index.css';
import Navbar from '../components/common/Navbar';
import Header_section from '../components/common/header_sections';
import Tabs from '../components/common/Tabs';
import Content_personal from '../components/tabs_content/Content_Personal';
import Content_abilities from '../components/tabs_content/Content_Abilities';
import Content_courses from '../components/tabs_content/Content_Courses';
import Content_project from '../components/tabs_content/Content_project';

const tabs_content_projects = [
    { id: "finished", label: "Terminados", content: <Content_project in_progress_projects={false}/> },
    { id: "in_progress", label: "En Progreso", content: <Content_project in_progress_projects={true}/> }
];

const ProjectPage = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <Navbar />
            <Header_section title={"Proyectos"}/>
            <div className="flex flex-col items-center justify-center  w-full">
                <img className="size-64 rounded-full m-14" src="src\assets\images\dcff0ac0-ea78-4454-af10-c91ca344721a.jpg" alt="" />
                <p className="text-lg">
                    En esta página encontrarás más detalles sobre mis proyectos y mi experiencia.
                </p>
                <Tabs content={tabs_content_projects}/>
            </div>
        </div>
    );
};

export default ProjectPage;