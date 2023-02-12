import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import{Navbar} from './components/navbar';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import ONama from './pages/about/about';
import Kontakt from './pages/contact/contact';

function App() {
  return <div className = "App">
   <ShopContextProvider>
    <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element ={<Shop/>}/>
          <Route path="about" element={<ONama/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="contact" element={<Kontakt/>}/>
        </Routes>
    </Router>
    </ShopContextProvider>
  </div>;
  
}

export default App;
