// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Cart from "./pages/Cart";
import Navbar from './component/Navbar';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import Payment from './pages/Payment';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './pages/Footer';

function App() { 
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Thank-you" element={<ThankYou />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} /> 
      </Routes>
      <Footer/>
      
    </BrowserRouter>
    
  );
}

export default App;
