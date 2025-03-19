import React from 'react';
import Technologies_icons from '../common/technologies_icons';

const projects = [
    { id : 1,title: "Kotlin", in_progress: false  ,subtitle: "Pvee",image: "src/assets/images/pngtree-simple-gradient-technology-banner-background-material-backgroundsimplegeneral-backgroundtechnology-background-image_85451.jpg" ,technologies: ["React", "HTML", "CSS"] },
    { id : 2,title: "Kotlin", in_progress: false ,subtitle: "Pvee",image: "src/assets/images/pngtree-simple-gradient-technology-banner-background-material-backgroundsimplegeneral-backgroundtechnology-background-image_85451.jpg" , technologies: ["Python", "TensorFlow", "Django"]},
    { id : 3,title: "Kotlin", in_progress: true ,subtitle: "Pvee",image: "src/assets/images/pngtree-simple-gradient-technology-banner-background-material-backgroundsimplegeneral-backgroundtechnology-background-image_85451.jpg"  ,technologies: ["Python", "TensorFlow", "Django"]}
];

const Content_project = ({ in_progress_projects }) => {
    const newLocal = "font-semibold text-blue-500";
    return (
            <div className="mb-24">
                {projects
                .filter(project => project.in_progress == in_progress_projects)
                .map((project, index) => (
                        <a 
                        key={index} 
                        href={`/projects/${project.id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    > 
                        <div 
                            style={{ backgroundImage: `url(${project.image})` }} 
                            className="flex flex-col justify-center items-center bg-cover bg-center text-center h-44
                            transition-all duration-300 ease-in-out transform hover:h-52 hover:opacity-90 shadow-lg cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <h3 className="text-xl">{project.subtitle}</h3>
                            {/* Renderizar imágenes de tecnologías */}
                            <Technologies_icons technologies_display={project.technologies}/>
                        </div>
                    </a>
                ))}
            </div>
    );
};

export default Content_project;