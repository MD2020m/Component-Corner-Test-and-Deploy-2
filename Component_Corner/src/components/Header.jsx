import './Header.css';
import { Link } from "react-router-dom";

function Header({ storeName, cartCount }) {
    return <div>
        <h1 className='store-name'>{storeName}</h1>
        <div className="cart-container"> 
            <span className="cart-icon">🛒</span> 
            {cartCount} 
        </div>
        <nav className='nav-section'>
            <button className='nav-button'>
                <Link to="/" className="nav-link">Home</Link>
            </button>
            <button className='nav-button'>
                <Link to="/products" className="nav-link">Products</Link>
            </button>
            <button className='nav-button'>
                <Link to="/cart" className="nav-link">Cart</Link>
            </button>
        </nav>
    </div>
}

export default Header;