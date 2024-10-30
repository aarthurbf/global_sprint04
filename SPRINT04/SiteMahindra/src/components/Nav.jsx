import { Link } from 'react-router-dom';
import { NavStyle } from "../css/NavStyle";
import Logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavStyle>
            <section className='header'>
                <div className='header-container'>
                    <Link to="/">
                        <img src={Logo} alt="Logo" className='logo' />
                    </Link>
                    <div className='menu-icon' onClick={handleMenuToggle}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <li className='link'>
                            <Link to="/calendar" className='name' onClick={handleMenuToggle}>Calendário</Link>
                        </li>
                        <li className='link'>
                            <Link to="/news" className='name' onClick={handleMenuToggle}>Noticias</Link>
                        </li>
                        <li className='link'>
                            <Link to="/car" className='name' onClick={handleMenuToggle}>Carro</Link>
                        </li>
                        <li className='link'>
                            <Link to="/shop" className='name' onClick={handleMenuToggle}>Loja</Link>
                        </li>
                        <li className='link'>
                            <Link to="/stream" className='name' onClick={handleMenuToggle}>Transmissão</Link>
                        </li>
                        <li className='link'>
                            <Link to="/selection" className='name' onClick={handleMenuToggle}>Seleção</Link>
                        </li>
                        <li className='link'>
                            <Link to="/login" className='name' onClick={handleMenuToggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='icon' viewBox="0 0 448 512">
                                    <path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </NavStyle>
    );
}

export default Nav;
