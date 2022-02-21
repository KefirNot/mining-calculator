import logo from './logo.svg';
import './App.css';
import KefirnotCustomButton from './KefirnotCustomButton/KefirnotCustomButton';
import AndrewCustomButton from './AndrewCustomButton/AndrewCustomButton';

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

        <KefirnotCustomButton abuze="suka" abuseCount={888}>AZazazaOlolo</KefirnotCustomButton>

        <AndrewCustomButton compliment="pie" complimentCount={13}>Good boy, take a pie</AndrewCustomButton>

      </header>
    </div>
  );
}

export default App;
