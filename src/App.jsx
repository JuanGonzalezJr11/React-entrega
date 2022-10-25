import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { NotificationProvider } from './notification/notification'
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart'

function App() {
  return(
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="App-header">
              <Navbar />
            </div>
            <div className="App-body">
              <Routes>
                <Route path='/products' element={<ItemListContainer />} />
                <Route path='/products/:categoryId' element={<ItemListContainer />} />
                <Route path='/products/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/*' element={<h1>404 NOT FOUND</h1>} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  )
}

export default App;
