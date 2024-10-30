import { ShopStyle } from '../css/ShopStyle';
import { useState } from 'react';
import Clothe1 from '../assets/images/clothe1.jpg';
import Clothe2 from '../assets/images/clothe2.jpg';
import Produto from '../assets/images/produto.jpg';
import Produto1 from '../assets/images/produto1.jpg';
import Produto2 from '../assets/images/produto2.jpg';
import Produto3 from '../assets/images/produto3.jpg';
import Produto4 from '../assets/images/produto4.jpg';

const products = [
  {
    id: 1,
    image: Produto,
    title: '2024 Team T-shirt',
    brand: 'MAHINDRA RACING',
    price: 'R$309,99',
    isNew: true,
    link: '/produto/2024-team-t-shirt'
  },
  {
    id: 2,
    image: Produto1,
    title: 'Season 10 Championship Cap',
    brand: 'MAHINDRA RACING',
    price: 'R$199,99',
    isNew: false,
    link: '/produto/season-10-championship-cap'
  },
  {
    id: 3,
    image: Produto2,
    title: 'Season 10 Championship T-shirt',
    brand: 'MAHINDRA RACING',
    price: 'R$208,99',
    isNew: false,
    link: '/produto/season-10-championship-cap'
  },
  {
    id: 4,
    image: Produto3,
    title: '22/23 Team Softshell Jacket',
    brand: 'MAHINDRA RACING',
    price: 'R$407,99',
    isNew: true,
    link: '/produto/season-10-championship-cap'
  },
  {
    id: 5,
    image: Produto4,
    title: '22/23 Team Polo',
    brand: 'MAHINDRA RACING',
    price: 'R$120,99',
    isNew: false,
    link: '/produto/season-10-championship-cap'
  },
];
const pointsProducts = [
  {
    id: 1,
    image: Produto1,
    title: 'Team Cap Limited Edition',
    brand: 'MAHINDRA RACING',
    price: '1500 Mahindra Points',
    isNew: false,
    link: '/produto/exclusive-team-mug'
  },
  {
    id: 2,
    image: Produto4,
    title: '20/21 Team Polo Limited Edition',
    brand: 'MAHINDRA RACING',
    price: '2500 Mahindra Points',
    isNew: false,
    link: '/produto/team-cap-limited-edition'
  },
];

const Shop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Clothe1, Clothe2];

  const changeSlide = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % images.length
        : (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  return (
    <ShopStyle>
      <section className="slideshow-container">
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'slide-active' : ''}`}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
        <button className="prev" onClick={() => changeSlide("prev")}>❮</button>
        <button className="next" onClick={() => changeSlide("next")}>❯</button>
      </section>

      <div className="container">
        <h1>MAHINDRA RACING</h1>
        <div className="product-grid">
          {products.map((product) => (
            <a href={product.link} key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              {product.isNew && <div className="new-badge">NEW</div>}
              <h2 className="brand">{product.brand}</h2>
              <h3>{product.title}</h3>
              <div className="price">{product.price}</div>
            </a>
          ))}
        </div>
      </div>

      <div className="container">
        <h1>MAHINDRA POINTS</h1>
        <div className="product-grid">
          {pointsProducts.map((product) => (
            <a href={product.link} key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              {product.isNew && <div className="new-badge">NEW</div>}
              <h2 className="brand">{product.brand}</h2>
              <h3>{product.title}</h3>
              <div className="price">{product.price}</div>
            </a>
          ))}
        </div>
      </div>
    </ShopStyle>
  );
};

export default Shop;
