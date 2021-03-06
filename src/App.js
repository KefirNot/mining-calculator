import logo from './logo.svg';
import './App.css';
import KefirnotCustomButton from './KefirnotCustomButton/KefirnotCustomButton';
import AndrewCustomButton from './AndrewCustomButton/AndrewCustomButton';
import VerySmartButton from './VerySmartButton/VerySmartButton';
import GoodByeButton from './goodbyeButton/GoodByeButton';
import getRandomInt from './VerySmartButton/utils';

const FACTS = [
  'Ваза для вина - это декантер',
  'Можно умереть если съесть печень белого медведя.',
  'В эпоху сухого закона в США половина заключенных тюрем приходилось на нарушителей именно этого закона.',
  'НЕЛЬЗЯ БЫТЬ ПРОСТИТУТКОЙ если тебя зовут Мария и ты живешь в Сиене, Италия',
  'Чтобы избавиться от зубной боли, древние египтяне прикладывали к деснам дохлую мышь — потому что у мышей особенно крепкие зубы.',
  'Бывший глава КНДР Ким Чен Ир родился 16 февраля 1941 года на территории СССР, в селе Вятское, в 70 км от Хабаровска и при рождении был назван Юрий Ирсенович Ким.',
  'НА СОЗДАНИЕ ПЕСНИ «Я МОРЖ» Джона Леннона вдохновили звуки полицейской сирены',
  'ЗАПАДНОАФРИКАНСКОЕ ПЛЕМЯ МАТАМИ ИГРАЕТ В ФУТБОЛ ЧЕЛОВЕЧЕСКИМ ЧЕРЕПОМ',
  'ЩЕКОТКА БЫЛА ЗАПРЕЩЕНА ЗАКОНОМ в некоторых древних странах Востока, так как считалась греховным возбуждающим занятием',
  'Многие корейские сказки начинаются не с «когда-то давным давно», а с фразы «период когда тигры курили»',
  'Человеческое тело может произвести достаточно углерода при кремации, чтобы сделать 200 карандашей',
  'Некоторые пингвины-самки занимаются проституцией — совершают половой акт в обмен на камешки для строительства дома. Однако иногда они просто обманывают самца, заставляя его думать, что у них будет секс, а затем убегают, как только получают камешек',
  'Муравьи спят 250 раз в день',
  'В Древней Греции женщины считались вывернутыми наизнанку версиями мужчин'
];

const SMART_FACTS = [
  'Посмотрите, какая я умная кнопка!', 'Ебать я умная',
  'Господи, какая же я умная!', 'Друзь-даун по сравнению со мной!'
];

const NAMES = [
  'Макс', 'Саня', 'Виталя', 'Леха', 
  'Андрей', 'Дебил', 'Братуха', 'userName',
]

const choosenUser = NAMES[getRandomInt(0, NAMES.length-1)];
const goodByeWord = 'Зачем ты сюда зашел, ' + choosenUser + '?';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  
        <GoodByeButton goobByeWord={goodByeWord} goodbyeCount={888} margin>Прощай, {choosenUser}</GoodByeButton>
        <KefirnotCustomButton abuze="suka" abuseCount={888}>AZazazaOlolo</KefirnotCustomButton>
        <VerySmartButton factArray={FACTS} smartArray={SMART_FACTS}>Какой умный кнопка! Ай-ай-ай!</VerySmartButton>


        <AndrewCustomButton compliment="pie" complimentCount={13}>Good boy, take a pie</AndrewCustomButton>

      </header>
    </div>
  );
}

export default App;
