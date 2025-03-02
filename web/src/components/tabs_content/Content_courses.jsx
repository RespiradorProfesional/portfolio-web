import React from 'react';

const courses = [
    { title: "IA e Data", subtitle: "Pvee", image: "src\assets\react.svg", description: "Frontend con React y Tailwineeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed.", level: 80, link: "https://react.dev/" },
    { title: "Kotlin",  subtitle: "Pvee",image: "src\assets\react.svg", description: "Desarrollo móvil y backend.", level: 75, link: "https://kotlinlang.org/" },
    { title: "Python", subtitle: "Pvee", image: "src\assets\react.svg", description: "Machine Learning e IA.", level: 85, link: "https://www.python.org/" },
    { title: "Godot", subtitle: "Pvee", image: "src\assets\react.svg", description: "Desarrollo de videojuegos.", level: 70, link: "https://godotengine.org/" },
    { title: "Java", subtitle: "Pvee", image: "src\assets\react.svg", description: "Backend con Spring Boot.", level: 78, link: "https://www.java.com/" },
    { title: "JavaScript", subtitle: "Pvee", image: "src\assets\react.svg", description: "Frontend y Backend.", level: 82, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
];

const Content_courses = () => {
    return (
        <div className="max-w-3xl mx-auto mt-10 mb-20 p-6   shadow-lg rounded-lg text-center border-4 border-blue-500">
            <h2 className="text-3xl font-bold text-center mb-6">Mis Cursos</h2>
            <div className="">
                {courses.map((course) => (

                    <div className="flex gap-16 mx-10 my-24">
                        <img className="w-24 h-24" src={course.image} alt={course.name} />
                        <div>
                            <h3 className="text-xl font-semibold mt-2">{course.title}</h3>
                            <h3 className="text-xl font-semibold mt-2">{course.subtitle}</h3>
                        </div>
                        <div className="max-h-28 overflow-hidden overflow-y-auto">
                            <p className="text-gray-600 text-sm">{course.description}</p>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    );
};

export default Content_courses;