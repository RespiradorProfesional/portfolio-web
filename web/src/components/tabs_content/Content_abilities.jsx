import React from 'react';
const skills = [
    { name: "React", image: "src\assets\react.svg", description: "Frontend con React y Tailwind.", level: 80, link: "https://react.dev/" },
    { name: "Kotlin", image: "src\assets\react.svg", description: "Desarrollo móvil y backend.", level: 75, link: "https://kotlinlang.org/" },
    { name: "Python", image: "src\assets\react.svg", description: "Machine Learning e IA.", level: 85, link: "https://www.python.org/" },
    { name: "Godot", image: "src\assets\react.svg", description: "Desarrollo de videojuegos.", level: 70, link: "https://godotengine.org/" },
    { name: "Java", image: "src\assets\react.svg", description: "Backend con Spring Boot.", level: 78, link: "https://www.java.com/" },
    { name: "JavaScript", image: "src\assets\react.svg", description: "Frontend y Backend.", level: 82, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
];

const Content_abilities = () => {
    const newLocal = "font-semibold text-blue-500";
    return (
        <div className="max-w-3xl mx-auto mt-10 mb-20 p-6   shadow-lg rounded-lg text-center border-4 border-blue-500">
            <h2 className="text-3xl font-bold text-center mb-6">Mis Habilidades</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill) => (

                    <a href={skill.link} target="_blank" rel="noopener noreferrer" className="block p-4 text-center hover:shadow-xl transition duration-300">
                        <img className="w-16 h-16 mx-auto rounded-full border-2 border-blue-500" src={skill.image} alt={skill.name} />
                        <h3 className="text-xl font-semibold mt-2">{skill.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{skill.description}</p>
                        <div className="mt-3">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    </a>
                    
                ))}
            </div>
        </div>
    );
};

export default Content_abilities;