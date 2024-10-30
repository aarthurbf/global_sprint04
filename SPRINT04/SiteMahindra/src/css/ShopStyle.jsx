import styled from 'styled-components';

export const ShopStyle = styled.section`
  .slideshow-container {
    position: relative;
    width: 100%;
    height: 60vh;
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
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    padding: 1rem;
    z-index: 1;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    max-width: 1200px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
    color: #e60000;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }

  .product-item {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    text-align: center;
    transition: transform 0.3s ease;
    text-decoration: none;  
    color: inherit;         
  }

  .product-item:hover {
    transform: translateY(-5px);
  }

  .product-item img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .new-badge {
    background-color: #007bff;
    color: #fff;
    padding: 5px 10px;
    font-size: 0.75rem;
    border-radius: 5px;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .brand {
    font-size: 1rem;
    color: #333;
    margin-top: 10px;
    font-weight: 600;
  }

  h3 {
    font-size: 1.2rem;
    color: #e60000;
    margin: 10px 0;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #e60000;
  }

  @media (max-width: 768px) {
    .product-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    .slideshow-container {
      height: 50vh;
    }

    .prev, .next {
      font-size: 1.5rem;
      padding: 0.5rem;
    }
  }
    
`;
