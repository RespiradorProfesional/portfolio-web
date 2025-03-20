import React from 'react';

import '../styles/index.css';
import Navbar from '../components/common/Navbar';
import Header_section from '../components/common/header_sections';
import Tabs from '../components/common/Tabs';
import Content_personal from '../components/tabs_content/Content_Personal';
import Content_abilities from '../components/tabs_content/Content_Abilities';
import Content_courses from '../components/tabs_content/Content_Courses';
import Content_project from '../components/tabs_content/Content_project';
import { useState } from "react";


const tabs_content_projects = [
    { id: "finished", label: "Terminados", content: <Content_project in_progress_projects={false}/> },
    { id: "in_progress", label: "En Progreso", content: <Content_project in_progress_projects={true}/> }
];

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensaje enviado 🚀");
        setFormData({ name: "", email: "", message: "" }); // Reiniciar formulario
    };

    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <Navbar />
            <Header_section title={"Contacto"}/>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg w-96 mt-32">
                <label className="block mb-2 text-gray-700">Nombre</label>
                <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                required 
                />

                <label className="block mb-2 text-gray-700">Email</label>
                <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                required 
                />

                <label className="block mb-2 text-gray-700">Mensaje</label>
                <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="4" 
                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                required 
                ></textarea>

                <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Enviar
                </button>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <a 
                    href="https://www.linkedin.com/in/tu-perfil" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-5"
                    >
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                            alt="LinkedIn" 
                            className="w-6 h-6"
                        />
                        LinkedIn
                    </a>
                    <h3 className='text-gray-700'>---- o ----</h3>
                    <p className='text-gray-700'>nestorlpa2003@gmail.com</p>
                </div>
            </form>
        </div>
    );
};

export default ContactPage;