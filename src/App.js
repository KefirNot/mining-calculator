import logo from './logo.svg';
import './App.css';

import GoodByeButton from './keficrh-custom-button/kefirch_button';

const userName = 'дебил';
const goodByeWord = 'Зачем ты сюда зашел, ' + userName + '?';

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
  
        <GoodByeButton goobByeWord={goodByeWord} goodbyeCount={888} margin>Прощай, {userName}</GoodByeButton>

      </header>
    </div>
  );
}

export default App;
