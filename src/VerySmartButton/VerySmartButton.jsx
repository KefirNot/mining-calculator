export default function VerySmartButton({ children }) {
    const onClick = () => {
        var facts = ['Ваза для вина - это декантер', 'Пить - вредно для здоровья',
         'Котики - красивые', 'Русский реп - для бомжей'];
        var fact = facts[Math.floor(Math.random() * facts.length)];
        var iSmart = ['Посмотрите, какая я умная кнопка!', 'Ебать я умная',
         'Я умнее, чем ты!', 'Друзь-даун по сравнению со мной!'];
        var smart = iSmart[Math.floor(Math.random() * iSmart.length)];
            console.log(fact);
            console.log('-------------------------');
            console.log(smart);
            console.log('-------------------------');
    }
    return (
        <button onClick={onClick}>{children}</button>
    )
}