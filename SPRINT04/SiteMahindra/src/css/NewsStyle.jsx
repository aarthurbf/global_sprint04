import styled from "styled-components";

export const NewsStyle = styled.section`
  .btn {
    background-color: var(--color4);
    border: 2px solid var(--color5);
    padding: 8px 0.9rem;
    border-radius: 5px;
    color: var(--color6);
    transition: var(--transition);
  }

  .btn:hover {
    background: transparent;
    color: var(--color2);
  }

  .produto-title {
    font-size: 4.5vmin;
    text-align: center;
    margin: 2.5rem 0 2rem;
    color: var(--color5);
  }

  .produto-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-items: center;
    grid-gap: 2rem;
    padding: 0 1rem 6rem;
  }

  .produto-item {
    max-width: 30rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-shadow: 1px 1px 30px darkgray;
    border-radius: 5px;
    transition: 0.5s;
  }

  .produto-item:hover {
    transform: scale(1.1);
  }

  .produto-item img {
    width: 100%;
    border-radius: 5px;
  }

  .produto-item h3 {
    margin: 2rem 0;
    font-weight: 800;
  }

  .produto-item p {
    margin: 0 0 1.5rem;
    width: 80%;
  }

  .vejaMais {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    .produto-item {
      max-width: 25rem;
    }

    .produto-title {
      font-size: 6vmin;
    }
  }

  @media screen and (max-width: 480px) {
    .produto-item {
      max-width: 100%;
      margin: 2rem auto;
      padding: 1.5rem;
    }
    
    .produto-title {
      font-size: 10vmin;
    }
  }
`;
