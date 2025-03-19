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

const Technologies_icons = ({technologies_display, className}) => {
    return (        
        <div className={`flex gap-2 ${className}`}>
            {technologies_display.map((tech, i) => (
                <img 
                    key={i} 
                    src={technologyImages[tech]} 
                    alt={tech} 
                    className="w-10 h-10 rounded-full border border-gray-300"
                />
            ))}
        </div>

    );
};

export default Technologies_icons;