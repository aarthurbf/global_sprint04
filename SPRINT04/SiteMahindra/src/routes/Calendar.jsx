import { CalendarStyle } from '../css/CalendarStyle';
import Tabela from '../assets/images/tabela.png';

const Calendar = () => {
    return (
        <CalendarStyle>
            <h1 className='calendar-title'>Calendário Formula E - 2024</h1>
            <img src={Tabela} alt="Tabela das corridas" className='calendar-image' />
        </CalendarStyle>
    );
};

export default Calendar;
