
import React from 'react';
import Slider from 'react-slick';

import Card_home from './Card_home.jsx';

// Importar los estilos
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Card_slider = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true, // Activa el modo centrado
        centerPadding: '100px',
        arrows : true
      };

    return (
        <div className="slider-container w-full max-w-4xl mx-auto">
            <Slider {...settings}>
                <div>
                <Card_home 
                title="Tecnología que cambia el mundo"
                description="Aquí exploramos las tecnologías que han transformado la industria."
            />
                </div>
                <div>
                <Card_home 
                title="e que cambia el mundo"
                description="Aquí exploramos las tecnologías que han transformado la industria."
            />
                </div>
                <div>
                <Card_home 
                title="aaaaa que cambia el mundo"
                description="Aquí exploramos las tecnologías que han transformado la industria."
            />
                </div>
            </Slider>
        </div>
    );
};


export default Card_slider;

