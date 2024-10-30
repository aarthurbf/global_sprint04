import { SelectionStyle } from '../css/SelectionStyle';

const Selection = () => {
    return (
        <SelectionStyle>
            <section className="selection">
                <div className="banner">
                    <h2>Em busca do próximo campeão da Fórmula E</h2>
                </div>
                <div className="selection-container">
                    <h1 className="selection-title">Talento E</h1>
                    <p className="selection-text">
                        Transformando sonhos em realidade, nosso projeto Talento E oferece uma seleção especial para jovens brasileiros se tornarem pilotos de Fórmula E. Ao serem selecionados, esses talentos terão a oportunidade de se tornarem ídolos nacionais e internacionais, elevando o nome do Brasil no cenário automobilístico mundial.
                        <br /><br />
                        Esta iniciativa visa não apenas descobrir novos talentos, mas também popularizar a Fórmula E no Brasil, inspirando uma nova geração de entusiastas e promovendo a sustentabilidade no esporte a motor.
                    </p>
                </div>
                <div className="selection-form">
                    <form className="form">
                        <h2>Se inscreva</h2>
                        <p type="Nome"><input placeholder="Escreva seu nome" /></p>
                        <p type="Email"><input placeholder="Informe seu email" /></p>
                        <p type="Mensagem"><input placeholder="Escreva sua mensagem" /></p>
                        <button type="submit">Enviar mensagem</button>
                    </form>
                </div>
            </section>
        </SelectionStyle>
    );
};

export default Selection;
