import styled from "styled-components";

export const NavStyle = styled.section`
    .header {
        background-color: var(--color1);
    }

    .logo {
        width: 40%;
        height: 40%;
    }

    .header .header-container {
        display: flex;
        padding: 1rem 1.8rem;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .header ul {
        display: flex;
        list-style: none;
    }

    .header .link {
        font-size: 1.3rem;
        padding: 0.7rem;
    }

    .name {
        color: var(--color6);
    }

    .name:hover {
        font-weight: 550;
    }

    .header .link:hover {
        cursor: pointer;
    }

    .icon {
        width: 1.2rem;
    }

    .menu-icon {
        font-size: 1.8rem;
        color: var(--color6);
        cursor: pointer;
        display: none;
    }

    @media (max-width: 768px) {
        .menu-icon {
            display: block;
        }

        .header ul {
            flex-direction: column;
            position: absolute;
            top: 80px;
            left: -100%;
            width: 100%;
            height: 100vh;
            background-color: var(--color1);
            justify-content: center;
            align-items: center;
            transition: 0.5s;
            z-index: 10;
        }

        .header ul.active {
            left: 0;
        }

        .header .link {
            padding: 0.5rem;
            font-size: 1.5rem;
        }

        .header-container {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    @media (max-width: 425px) {
        .header .logo {
            width: 50%;
        }

        .header ul {
            flex-direction: column;
        }

        .header .link {
            font-size: 1.2rem;
        }
    }
`;
