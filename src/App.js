import logo from './logo.svg';
import './App.css';
import AvatarJsx from './components/AvatarJsx';
import Button from './components/Button/Button';

function App() {

  const cancel = () => {
    console.log('cancele')
  }

  return (
    <div className="App">
      <header className="App-header">
        <AvatarJsx />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">
          ¡Bienvenidos a Vans Store!
        </h1>
        <a
          className="App-link"
          href="https://www.vans.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitanos
        </a>
        <Button label={'Aceptar'} background={'white'} color={'red'} action={() => console.log('Acepte')} />
        <Button label={'Cancelar'} background={'white'} color={'black'} action={cancel}/>
      </header>
    </div>
  );
}

export default App;
