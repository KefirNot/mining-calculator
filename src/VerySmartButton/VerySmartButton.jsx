import './button_style.css';
import getRandomInt from './utils.js';



export default function VerySmartButton({ children, FACT_MASS, SMART_MASS }) {
    const onClick = () => {
        console.log(getRandomInt(FACT_MASS));
        console.log('-------------------------');
        console.log(getRandomInt(SMART_MASS));
        console.log('-------------------------');
    }
    return (
        <button className='smart-button' onClick={onClick}>{children}</button>
    )
}