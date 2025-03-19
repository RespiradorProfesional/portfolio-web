import React from 'react';

import '../styles/index.css';
import Navbar from '../components/common/Navbar';
import Header_section from '../components/common/header_sections';
import Tabs from '../components/common/Tabs';
import Content_personal from '../components/tabs_content/Content_Personal';
import Content_abilities from '../components/tabs_content/Content_Abilities';
import Content_courses from '../components/tabs_content/Content_Courses';
import Content_project from '../components/tabs_content/Content_project';
import image_import from '../assets/images/pngtree-simple-gradient-technology-banner-background-material-backgroundsimplegeneral-backgroundtechnology-background-image_85451.jpg'
import Technologies_icons from '../components/common/technologies_icons';

const technologyImages = {
    "React": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "HTML": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    "CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    "JavaScript": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "Node.js": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "Python": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "TensorFlow": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    "Django": "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
};


const project_data = { 
    id : 3,
    title: "Kotlin", 
    subtitle: "kotlina",
    in_progress: true ,
    image: "src\assets\images\pngtree-simple-gradient-technology-banner-background-material-backgroundsimplegeneral-backgroundtechnology-background-image_85451.jpg"  ,
    technologies: ["Python", "TensorFlow", "Django"],
    description: "eqweqweqeq ad asd a adaeq eqe qeee ad  q ejq qwe qw ejqwejwq eqweqeqeq eq qw  eqe qeq eqweqweqeq ad asd a adaeq eqe qeee ad  q ejq qwe qw ejqwejwq eqweqeqeq eq qw  eqe qeq eqweqweqeq ad asd a adaeq eqe qeee ad  q ejq qwe qw ejqwejwq eqweqeqeq eq qw  eqe qeq eqweqweqeq ad asd a adaeq eqe qeee ad  q ejq qwe qw ejqwejwq eqweqeqeq eq qw  eqe qeq",
    image_about_project : [image_import,image_import,image_import],
    buttons_link: [{
        title_link:"prueba",
        link:"e"
    },
    {
        title_link:"prueba",
        link:"e"
    }]
}

const ProjectSpecificPage = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <Navbar />
    
            <h1 className='my-20'>{project_data.title}</h1>
            {/* lo de la imagen importada es una solucion temporal*/}
            <img className="max-w-screen-md min-h-72 max-h-96" src={image_import} alt="" /> 

            <Technologies_icons className = "my-10" technologies_display= {project_data.technologies} />

            <p className='max-w-4xl'>{project_data.description}</p>
            
            {project_data.image_about_project.map((image) => (
                    <img className="w-[1000px] my-10" src={image} alt="" /> 
                ))}
            <div className='flex gap-16'>
            {project_data.buttons_link.map((button) => (
                    <a
                    href={button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    {button.title_link}
                  </a>
                ))}
            </div>
        </div>
    );
};

export default ProjectSpecificPage;