import './button_style.css';
import getRandomInt from './utils.js';



export default function VerySmartButton({ children, factArray, smartArray }) {
    const onClick = () => {
        console.log(factArray[getRandomInt(0, factArray.length - 1)]);
        console.log('-------------------------');
        console.log(smartArray[getRandomInt(0, smartArray.length - 1)]);
        console.log('-------------------------');
    }
    return (
        <button className='smart-button' onClick={onClick}>{children}</button>
    )
}