import logo from './logo.svg';
import './App.css';
import AvatarJsx from './components/AvatarJsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AvatarJsx />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          ¡Bienvenidos a Vans Store!
        </p>
        <a
          className="App-link"
          href="https://www.vans.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitanos
        </a>
      </header>
    </div>
  );
}

export default App;
