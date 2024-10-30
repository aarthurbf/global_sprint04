import styled from "styled-components";

export const CalendarStyle = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    .calendar-title {
        color: var(--color3);
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .calendar-image {
        max-width: 30%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
        .calendar-title {
            font-size: 2rem;
        }

        .calendar-image {
            max-width: 90%;
        }
    }

    @media (max-width: 480px) {
        .calendar-title {
            font-size: 1.5rem;
        }

        .calendar-image {
            max-width: 100%;
        }
    }
`;
