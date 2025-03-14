import React from 'react';

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
                            className="flex flex-col justify-center items-center bg-cover bg-center text-center h-32 my-24 mx-4
                            transition-transform duration-300 ease-in-out transform hover:scale-y-110 hover:opacity-90 rounded-lg shadow-lg cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <h3 className="text-xl">{project.subtitle}</h3>
                            {/* Renderizar imágenes de tecnologías */}
                            <div className="flex gap-2 mt-2">
                                    {project.technologies.map((tech, i) => (
                                        <img 
                                            key={i} 
                                            src={technologyImages[tech]} 
                                            alt={tech} 
                                            className="w-10 h-10 rounded-full border border-gray-300"
                                        />
                                    ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
    );
};

export default Content_project;