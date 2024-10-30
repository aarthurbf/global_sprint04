import styled from 'styled-components';

export const ErrorStyle = styled.section`
  
  *{
    font-family: Arial, sans-serif;
  }

  .error-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    padding: 0 1rem;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color3);
  }

  p {
    margin-bottom: 2rem;
    color: var(--color1);
  }

  .btn {
    padding: 0.7em 1.5em;
    font-size: 1rem;
    border-radius: 0.5em;
    background: var(--color7);
    color: var(--color1);
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      background: var(--color5);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    .btn {
      font-size: 0.9rem;
      padding: 0.6em 1.2em;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    .btn {
      font-size: 0.8rem;
      padding: 0.5em 1em;
    }
  }
`;
