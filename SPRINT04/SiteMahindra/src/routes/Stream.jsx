import { StyledSection } from "../css/StreamStyle";
import { Link } from 'react-router-dom';
import Coin from '../assets/images/coin-icon.png';
import Temp from '../assets/images/temperatura-alta.png';

const Stream = () => {
    return (
        <StyledSection>
            <div className="stream-container">
                <div className="video-wrapper">
                    <div className="video-container">
                        <div className="video-player">
                            <p>Aguarde começar a corrida</p>
                        </div>
                    </div>

                <div className="status-container">
                    <div className="points-container">
                        <img src={Coin} alt="Ícone de moeda" className="coin-icon" />
                        <p>1234</p>
                    </div>

                    <div className="points-container">
                        <img src={Temp} alt="Ícone de moeda" className="coin-icon" />
                        <p>13°C</p>
                    </div>
                </div>

                    <div className="chat-section">
                        <div className="card-container">
                            <h1>Torne-se uma lenda do automobilismo</h1>
                            <Link to='/selection'>
                                <button className="button-card">Inscreva-se Já</button>
                            </Link>
                        </div>

                        <div className="chat-container">
                            <div className="chat-box">
                                <p>
                                    <span className="user-icon"></span> Usuário: Ansioso para assistir a Mahindra hoje!
                                </p>
                            </div>
                            <input className="input-box" placeholder="Digite uma mensagem..." />
                        </div>
                    </div>
                </div>
            </div>
        </StyledSection>
    );
};

export default Stream;
