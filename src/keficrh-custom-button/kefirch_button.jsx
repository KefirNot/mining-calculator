import './kefirch_button.css';

export default function GoodByeButton({ children, goobByeWord, goodbyeCount, margin }) {
    const onClick = () => {
        for (let i = 0; i <goodbyeCount; i++) {
            console.log(goobByeWord);
            console.log('_______');
        }


    }
    if(margin) return <button className='withMargin' onClick={onClick}>{children}</button>;
    else return <button onClick={onClick}>{children}</button>;
}