import './GoodByeButton.css';

export default function GoodByeButton({ children, goobByeWord, goodbyeCount, margin}) {
    const onClick = () => {
        for (let i = 0; i <goodbyeCount; i++) {
            console.log(goobByeWord);
            console.log('_______');
        }


    }
    if(margin) return <button className='withMargin goodbye' onClick={onClick}>{children}</button>;
    else return <button className='goodbye' onClick={onClick}>{children}</button>;
}
