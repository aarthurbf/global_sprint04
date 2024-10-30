import React, { useState } from 'react';
import { HomeStyle } from '../css/HomeStyle';
import Mortara from '../assets/images/mortara.png';
import Nick from '../assets/images/nick.png';
import Carro1 from '../assets/images/carro1.jpg';
import Carro2 from '../assets/images/carro2.jpg';
import Carro3 from '../assets/images/carro3.jpg';
import Carro4 from '../assets/images/carro4.jpg';
import Carro5 from '../assets/images/carro5.jpg';
import Carro6 from '../assets/images/carro6.jpg';
import Carro7 from '../assets/images/carro7.jpg';

const Home = () => {
    const images = [Carro1, Carro2, Carro3, Carro4, Carro5, Carro6, Carro7];
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeSlide = (direction) => {
        setCurrentIndex((prevIndex) =>
            direction === "next"
                ? (prevIndex + 1) % images.length
                : (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
        );
    };

    return (
        <HomeStyle>
            <section>
                <section className="slideshow-container">
                    {images.map((image, index) => (
                        <div key={index} className={`slide ${index === currentIndex ? 'slide-active' : ''}`}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                    <button className="prev" onClick={() => changeSlide("prev")}>❮</button>
                    <button className="next" onClick={() => changeSlide("next")}>❯</button>
                </section>

                <section className="section-edoardo">
                    <div className="container profile-left">
                        <div className="profile-image">
                            <img alt="Edoardo Mortara" height="600" src={Mortara} width="400" />
                        </div>
                        <div className="profile-info">
                            <h1 className='mortara'>EDOARDO MORTARA</h1>
                            <h2 className='mortara'>PILOTO</h2>
                            <div className="stats">
                                <div className="stats-column">
                                    <div>
                                        <span>P2</span>
                                        <p>Melhor Resultado<br />Campeonato Mundial</p>
                                    </div>
                                    <div>
                                        <span>6</span>
                                        <p>Vitórias</p>
                                    </div>
                                </div>
                                <div className="stats-column">
                                    <div>
                                        <span>13</span>
                                        <p>Pódios</p>
                                    </div>
                                    <div>
                                        <span>3</span>
                                        <p>Poles Positions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-nick">
                    <div className="container profile-right">
                        <div className="profile-info">
                            <h1>NICK DE VRIES</h1>
                            <h2>PILOTO</h2>
                            <div className="stats">
                                <div className="stats-column">
                                    <div>
                                        <span>P1</span>
                                        <p>Melhor Resultado<br />Campeonato Mundial</p>
                                    </div>
                                    <div>
                                        <span>4</span>
                                        <p>Vitórias</p>
                                    </div>
                                </div>
                                <div className="stats-column">
                                    <div>
                                        <span>8</span>
                                        <p>Pódios</p>
                                    </div>
                                    <div>
                                        <span>2</span>
                                        <p>Poles Positions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-image">
                            <img alt="Nick" height="600" src={Nick} width="400" />
                        </div>
                    </div>
                </section>

                <div className="selection-container">
                    <h1 className="selection-title">POPULARIZAÇÃO DO FÓRMULA E NO BRASIL</h1>
                    <p className="selection-text">
                        Como parte da Mahindra Racing, estamos comprometidos em aumentar a presença e o interesse pela Fórmula E no Brasil. Em parceria com a FIA e outras equipes, buscamos expandir o alcance e promover o envolvimento dos brasileiros com a categoria.
                        Através de ações estratégicas, iniciativas educativas e eventos envolventes, buscamos não apenas aumentar a conscientização sobre a Fórmula E, mas também inspirar uma nova geração de entusiastas e profissionais do automobilismo elétrico no país.
                        A Fórmula E é única por ser um esporte automobilístico totalmente elétrico, contribuindo significativamente para a sustentabilidade ambiental ao reduzir as emissões de carbono e promover tecnologias mais limpas. No entanto, o desconhecimento sobre essa característica pode levar as pessoas a não reconhecerem o impacto positivo que a Fórmula E tem no meio ambiente, resultando em menos apoio e engajamento com a categoria.
                    </p>
                </div>
            </section>
        </HomeStyle>
    );
};

export default Home;
