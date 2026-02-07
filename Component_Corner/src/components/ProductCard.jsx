import './ProductCard.css';

function ProductCard({ name, price, image, description, handleAddToCart }) {
    const handleClick = () => {
        console.log({name, price});
        handleAddToCart({
            name:name,
            price:price
        });
    }
    
    return (
        <div className="product-card">
            <img className="product-img" 
            src={image}
            alt="Product image" />
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">{price}</p>
                <p className="product-descr">{description}</p>
                <button className='add-to-cart-btn' onClick={handleClick}>
                    <p className='add-to-cart-txt'>Add to cart</p>
                </button>
            </div>
        </div>
    )
}

export default ProductCard;