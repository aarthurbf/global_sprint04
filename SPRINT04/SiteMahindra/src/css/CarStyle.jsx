import styled from "styled-components";
import CarImage from '../assets/images/carro.jpg';

export const CarStyle = styled.section`
  .banner {
    background: url(${CarImage}) no-repeat center center;
    background-size: cover;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2rem;
  }

  .banner h2 {
    color: var(--color7);
    text-shadow: 1px 2px 6px #000;
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5rem 2rem;
    flex-wrap: wrap;
  }

  .specs, .content {
    flex: 1 1 300px;
    margin: 1rem;
  }

  .specs {
    background-color: var(--color7);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .specs h3 {
    color: var(--color5);
    font-size: 2rem;
  }

  .specs p {
    color: var(--color2);
    font-size: 1.5rem;
    margin: 15px 0;
  }

  .content h1 {
    color: var(--color5);
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .content p {
    color: #333;
    font-size: 1.6rem;
    line-height: 1.5;
    max-width: 600px;
  }

  .slideshow-container {
    position: relative;
    width: 100%;
    height: 70vh;
    overflow: hidden;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .slide-active {
    opacity: 1;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .prev, .next {
    position: absolute;
    top: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }

  @media (max-width: 1024px) {
    .container {
      padding: 3rem 1rem;
      flex-direction: column;
    }

    .banner h2 {
      font-size: 2.2rem;
    }

    .content h1 {
      font-size: 3rem;
      text-align:center;
    }

    .content p {
      font-size: 1.4rem;
      text-align:center;
    }
  }

  @media (max-width: 768px) {
    .banner h2 {
      font-size: 2rem;
    }

    .content h1 {
      font-size: 2.5rem;
    }

    .content p {
      font-size: 1.2rem;
    }

    .container {
      justify-content: center;
      text-align: center;
      padding: 2rem;
    }
  }

  @media (max-width: 480px) {
    .banner h2 {
      font-size: 1.5rem;
    }

    .content h1 {
      font-size: 2rem;
    }

    .content p {
      font-size: 1rem;
    }

    .specs p {
      font-size: 1.2rem;
    }
  }
`;
