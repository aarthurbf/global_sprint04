import { CarStyle } from '../css/CarStyle';
import { useState } from 'react';
import Carro1 from '../assets/images/carro1.jpg';
import Carro2 from '../assets/images/carro2.jpg';
import Carro3 from '../assets/images/carro3.jpg';
import Carro4 from '../assets/images/carro4.jpg';

const Car = () => {
    const images = [Carro1, Carro2, Carro3, Carro4];
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeSlide = (direction) => {
        setCurrentIndex((prevIndex) =>
            direction === "next"
                ? (prevIndex + 1) % images.length
                : (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
        );
    };

    return (
        <CarStyle>
            <div className="banner">
                <h2>M10ELECTRO</h2>
            </div>
            <div className="container">
                <div className="specs">
                    <h3>VELOCIDADE MÁXIMA</h3>
                    <p>200MPH (320KPH)</p>
                    <h3>PODER MÁXIMO</h3>
                    <p>320KW (470BHP)</p>
                    <h3>PESO DO CARRO</h3>
                    <p>840KG</p>
                    <h3>CAPACIDADE DE CARGA</h3>
                    <p>600KW</p>
                </div>
                <div className="content">
                    <h1>MAIS LEVE <br />MAIS RÁPIDO, <br />MAIS EFICIENTE</h1>
                    <p>Este é o carro de corrida elétrico mais eficiente do mundo já construído e foi projetado e otimizado especificamente para emocionantes corridas de rua roda a roda.</p>
                </div>
            </div>

            <section className="slideshow-container">
                {images.map((image, index) => (
                    <div key={index} className={`slide ${index === currentIndex ? 'slide-active' : ''}`}>
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
                <button className="prev" onClick={() => changeSlide("prev")}>❮</button>
                <button className="next" onClick={() => changeSlide("next")}>❯</button>
            </section>
        </CarStyle>
    );
};

export default Car;
