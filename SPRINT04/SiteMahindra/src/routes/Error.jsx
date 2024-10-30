import { Link } from 'react-router-dom';
import { ErrorStyle } from '../css/ErrorStyle';

const Error = () => {
  return (
    <ErrorStyle>
      <section className="error-page">
        <h1>404</h1>
        <h3>Oops! Página não encontrada</h3>
        <p>Desculpe, a página que você está procurando não existe.</p>
        <Link to="/">
          <button className="btn">Voltar ao início</button>
        </Link>
      </section>
    </ErrorStyle>
  );
};

export default Error;
