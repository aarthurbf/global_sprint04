import { NewsStyle } from "../css/NewsStyle";
import Imagem1 from "../assets/images/Image1.png";
import Imagem2 from "../assets/images/Image2.png";
import Imagem3 from "../assets/images/Image3.png";
import Imagem4 from "../assets/images/Image4.png";
import Imagem5 from "../assets/images/Image5.png";
import Imagem6 from "../assets/images/Image6.png";

const newsItems = [
  {
    img: Imagem1,
    title: "Atualização Positiva nos Testes do GEN3 Evo",
    description: "A Mahindra Racing anunciou uma atualização positiva nos testes do carro GEN3 Evo, destacando melhorias em velocidade e eficiência.",
    link: "#"
  },
  {
    img: Imagem2,
    title: "Prêmio de Melhor Conteúdo de Mídia Social",
    description: "A equipe ganhou o prêmio de Melhor Conteúdo de Mídia Social na Fórmula E, reconhecendo seu engajamento e inovação nas plataformas digitais.",
    link: "#"
  },
  {
    img: Imagem3,
    title: "Temporada de Sucesso em Londres",
    description: "A Mahindra Racing terminou a temporada da Fórmula E em alta, com uma performance sólida nas corridas finais em Londres.",
    link: "#"
  },
  {
    img: Imagem4,
    title: "Nova Formação de Pilotos",
    description: "Para a Temporada 10, a equipe contará com os experientes pilotos Nyck de Vries e Edoardo Mortara, trazendo uma combinação de talento e experiência para a equipe.",
    link: "#"
  },
  {
    img: Imagem5,
    title: "Parceria com Chotto Matte para o E-Prix de Londres 2024",
    description: "A Mahindra Racing anunciou uma parceria com o restaurante Chotto Matte para o E-Prix de Londres 2024, trazendo uma experiência gastronômica única para os fãs durante o evento.",
    link: "#"
  },
  {
    img: Imagem6,
    title: "Compromisso com a Era Gen3",
    description: "A Mahindra Racing foi a primeira fabricante a se comprometer com a era Gen3 do Campeonato Mundial de Fórmula E da FIA ABB.",
    link: "#"
  }
];

const News = () => {
  return (
    <NewsStyle>
      <section>
        <h2 className="produto-title">Notícias</h2>
        <div className="produto-list">
          {newsItems.map((item, index) => (
            <div key={index} className="produto-item">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="btn">
                Leia mais
              </a>
            </div>
          ))}
        </div>
      </section>
    </NewsStyle>
  );
};

export default News;
