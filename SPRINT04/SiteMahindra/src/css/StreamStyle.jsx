import styled from "styled-components";

export const StyledSection = styled.section`
  .stream-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem; 
  }

  .video-wrapper {
    width: 90%;
    max-width: 1200px; 
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .video-container {
    width: 100%;
    background-color: var(--color1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video-player {
    width: 100%;
    height: 50vh; 
    max-height: 700px;
    background-color: var(--color2);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color7);
    font-size: 1.5rem;
  }

  .status-container{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .points-container {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    background-color: var(--color7);
    padding: 5px 10px;
    border-radius: 5px;
    color: var(--color1);
    font-weight: bold;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .coin-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px; 
  }

  .chat-section {
    display: flex;
    flex-direction: column; 
    width: 100%;
    margin-top: 2rem;
  }

  .card-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color7);
    border-radius: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .card-container h1 {
    color: var(--color1);
    margin-bottom: 10px;
    text-align: center;
  }

  .button-card {
    padding: 10px 20px;
    background-color: var(--color5);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #cc0000;
    }
  }

  .chat-container {
    flex: 2;
    display: flex;
    flex-direction: column;
    background-color: var(--color7);
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-left: 0;
  }

  .chat-box {
    flex-grow: 1;
    background-color: var(--color7);
    border-radius: 1rem;
    padding: 1rem;
    overflow-y: auto;
  }

  .input-box {
    border: none;
    padding: 10px;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    outline: none;
    font-size: 1rem;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .video-player {
      height: 40vh; 
    }
    .points-container {
      justify-content: center;
    }

    .card-container {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    .video-player {
      height: 35vh;
      text-align:center;
    }

    .points-container {
      font-size: 0.9rem; 
    }

    .button-card {
      padding: 8px 15px; 
    }

    .chat-section {
      flex-direction: column;
    }

    .chat-container {
      margin-top: 1rem;
    }
  }
`;