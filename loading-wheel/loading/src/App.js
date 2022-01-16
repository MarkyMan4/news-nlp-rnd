import logo from './logo.svg';
import './App.css';
import GridLoader from "react-spinners/GridLoader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <GridLoader color="#000000" loading="true" size={50} />
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
      </header>
    </div>
  );
}

export default App;
