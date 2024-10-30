import styled from "styled-components";
import selectionImage from "../assets/images/image-selection.png";

export const SelectionStyle = styled.section`
  .banner {
    background: url(${selectionImage}) no-repeat center center;
    background-size: cover;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 0 2rem;
  }

  .banner h2 {
    color: var(--color7);
    text-shadow: 1px 2px 6px #000;
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  .selection-container {
    padding: 2rem 5%;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .selection-title {
    color: var(--color3);
    font-size: 2.5rem;
  }

  .selection-text {
    color: var(--color1);
    font-size: 1.1rem;
    margin-top: 1.5rem;
    line-height: 1.6;
  }

  .selection-form {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  .form {
    width: 100%;
    max-width: 500px;
    background: var(--color7);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  }

  .form h2 {
    margin-bottom: 1.5rem;
    color: var(--color3);
    border-bottom: 2px solid var(--color2);
    padding-bottom: 0.5rem;
  }

  .form input {
    width: 100%;
    padding: 0.75rem;
    margin-top: 1rem;
    background: none;
    border: 2px solid var(--color6);
    border-radius: 0.5rem;
    font-size: 1rem;
    color: var(--color1);
    outline: none;
    transition: border 0.3s;
  }

  .form input:focus {
    border-color: var(--color4);
  }

  .form button {
    width: 100%;
    padding: 0.75rem;
    margin-top: 1.5rem;
    background: var(--color4);
    border: none;
    color: var(--color7);
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background 0.3s;
  }

  .form button:hover {
    background: var(--color5);
  }

  @media (max-width: 768px) {
    .banner h2 {
      font-size: 2rem;
      margin: 0 1.5rem;
    }

    .selection-title {
      font-size: 2rem;
    }

    .selection-text {
      font-size: 1rem;
      margin: 1.5rem 2rem;
    }
  }

  @media (max-width: 480px) {
    .banner h2 {
      font-size: 1.5rem;
    }

    .selection-container {
      padding: 1rem;
    }

    .selection-text {
      font-size: 0.9rem;
    }
  }
`;
