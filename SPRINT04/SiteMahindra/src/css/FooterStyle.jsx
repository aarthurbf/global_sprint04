import styled from "styled-components"

export const FooterStyle = styled.section`
    .footer{
        background: var(--color1);
        padding: 1.8rem 0px;
        text-align: center;
    }

    .footer .row{
        width: 100%;
        margin: 1% 0%;
        padding: 0.6% 0%;
        color: var(--color6);
        font-size: 0.9rem;
    }

    .footer .row a{
        text-decoration:none;
        color: var(--color6);
        transition:0.5s;
    }
        
    .footer .row ul{
        width:100%;
    }

    .footer .row ul li{
        display: inline-block;
        margin: 0px 1.8rem;
    }

    .footer .row a svg{
        margin:0% 1%;
        width: 1.4rem;
    }

    @media (max-width:720px){
        .footer{
            text-align: left;
            padding: 5%;
        }
        .footer .row ul li{
            display: block;
            margin: 0.6rem 0px;
            text-align: left;
        }
        .footer .row a svg{
         margin: 0% 3%;
        }
    }
`