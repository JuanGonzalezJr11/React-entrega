import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'

function App() {

  // const cancel = () => {
  //   console.log('cancele')
  // }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <AvatarJsx />
  //       {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //       <h1 className="App-title">
  //         ¡Bienvenidos a Vans Store!
  //       </h1>
  //       <a
  //         className="App-link"
  //         href="https://www.vans.com.ar"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Visitanos
  //       </a>
  //       <Button label={'Aceptar'} background={'white'} color={'red'} action={() => console.log('Acepte')} />
  //       <Button label={'Cancelar'} background={'white'} color={'black'} action={cancel}/>
  //     </header>
  //   </div>
  // );

  return(
    <div className="App">
      <div className="App-header">
        <Navbar />
      </div>
      <div className="App-body">
        <ItemListContainer mensaje='¡Welcome to Vans Store! 🛹'/>
        <Footer />
      </div>
    </div>
  )
}

export default App;
