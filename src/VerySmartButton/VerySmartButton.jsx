import './button_style.css';
import GetRandomInt from './utils.js';



export default function VerySmartButton({ children, FACT_MASS, SMART_MASS }) {
    const onClick = () => {
        console.log(GetRandomInt(FACT_MASS));
        console.log('-------------------------');
        console.log(GetRandomInt(SMART_MASS));
        console.log('-------------------------');
    }
    return (
        <button className='smart-button' onClick={onClick}>{children}</button>
    )
}