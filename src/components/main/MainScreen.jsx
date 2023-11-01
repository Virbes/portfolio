import React from 'react';
import { NavBar } from '../navbar/NavBar';
import { MainCarousel } from './MainCarousel';

export const MainScreen = () => {

    const platforms = [
        { name: 'GitHub', icon: '', link: '' },
        { name: 'LinkedIn', icon: '', link: '' },
        { name: 'Twitter', icon: '', link: '' },
        { name: 'StackOverflow', icon: '', link: '' },
        { name: 'Facebook', icon: '', link: '' },
        { name: 'Instagram', icon: '', link: '' },
    ];

    return (
        <div className='container' >
            <NavBar />

            <div className='container-main'>
                <div className='info-fran'>
                    <h1>Francisco virbes</h1>
                    <p>
                        ¡Hola! Soy un apasionado desarrollador web con habilidades tanto
                        en el front-end como en el back-end. Mi enfoque radica en crear
                        experiencias digitales cautivadoras y funcionales. Me encanta transformar ideas en
                        código y estoy comprometido con la creación de sitios web atractivos, intuitivos y
                        efectivos. Con experiencia en tecnologías como HTML, CSS, JavaScript, React y Node.js,
                        busco constantemente desafíos emocionantes para seguir aprendiendo y mejorando.
                        Si estás buscando un colaborador para tu próximo proyecto web,
                        
                        <p><b>¡Estaré encantado de ayudar!</b></p>
                    </p>


                    <div>
                        {
                            platforms.map(platform => <span key={platform.name}>{platform.name} </span>)
                        }
                    </div>
                </div>

                <div className='image-fran'>
                    <img src="p.jpg" alt="Francisco Virbes" />
                </div>

            </div>

            <MainCarousel />

        </div>
    );
}
