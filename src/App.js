import logo from './logo.svg';
import './App.css';
import KefirchCustomButton from './keficrh-custom-button/kefirch_button';

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

        <KefirchCustomButton abuze="suka" abuzeCount={100}>azaza</KefirchCustomButton>

      </header>
    </div>
  );
}

export default App;
