import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {  NavbarNav } from './components/Navbar';
import { Shop } from './Pages/Shop/Shop';
import { Cart } from './Pages/Cart/Cart';
import { ShopContextProvider } from './context/shop-context';
import { Footer } from './components/Footer';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavbarNav/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
