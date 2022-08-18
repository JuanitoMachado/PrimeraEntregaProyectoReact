import logo from './logo.svg';
import './App.css';


import { styles } from "./styles";

import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={styles.heading}>
          ENCONTRA TODO LO QUE NECESITAS
        </p>
        <p style={styles.heading}>
          EN EL E-COMMERCE DE JUANCITO
        </p>

        <NavBar />

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
