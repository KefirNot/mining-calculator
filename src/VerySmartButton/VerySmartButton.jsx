import './button_style.css';
import GetRandomInt from './utils.js';



export default function VerySmartButton({ children, factMass, smartMass }) {
    const onClick = () => {
        console.log(GetRandomInt(factMass));
        console.log('-------------------------');
        console.log(GetRandomInt(smartMass));
        console.log('-------------------------');
    }
    return (
        <button className='smart-button' onClick={onClick}>{children}</button>
    )
}