import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CartItem from './components/CartItem';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';


function App() {

  const [cart, setCart] = useState(() => {
    const cartItems = localStorage.getItem('cartItems');
    
    if (cartItems) {
      return JSON.parse(cartItems);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    } catch {
      console.warn('Could not save cart to localStorage:', error);
    }
  }, [cart])

  const handleAddToCart = (product) => {
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price
    }
    const newCart = [...cart, newProduct];
    setCart(newCart);
    console.log(newCart);
  }

  const removeFromCart = (productName) => {
    setCart(cart.filter(product => product.name !== productName));
    console.log('remove worked');
  }

  const cartCount = cart.reduce((total, product) => total +1, 0);

  const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://placehold.co/600x400",
    description: "Premium noise-cancelling headphones with 30-hour battery life",
    addToCart: handleAddToCart
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: "https://placehold.co/600x400",
    description: "Fitness tracker with heart rate monitor and GPS",
    addToCart: handleAddToCart
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: "https://placehold.co/600x400",
    description: "Portable waterproof speaker with 360-degree sound",
    addToCart: handleAddToCart
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://placehold.co/600x400",
    description: "Ergonomic aluminum stand for laptops and tablets",
    addToCart: handleAddToCart
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://placehold.co/600x400",
    description: "4K webcam with auto-focus and noise reduction",
    addToCart: handleAddToCart
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://placehold.co/600x400",
    description: "RGB backlit keyboard with custom switches",
    addToCart: handleAddToCart
  }
];

  return (
    <BrowserRouter>
      <div className='app'>
        <Header storeName='Component Corner' cartCount={cartCount}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage products={products} addToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
        <Footer storeName='Component Corner' info='A new component storefront' content='content' />
      </div>
    </BrowserRouter>
  )
}

export default App;