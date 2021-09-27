import logo from "./logo.svg";
import "./App.css";
import FirstApp from "./components/FirstApp";
import CounterApp from "./components/CounterApp";
import { GifExpertApp } from "./components/GifExpertApp";

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
        <FirstApp />
        <CounterApp value={1} />
        <GifExpertApp />
      </header>
    </div>
  );
}

export default App;
