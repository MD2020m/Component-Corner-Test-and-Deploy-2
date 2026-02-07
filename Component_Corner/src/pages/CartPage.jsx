import CartItem from '../components/CartItem';

function CartPage({ cart, removeFromCart }) {

    return (
        <div className='cart-page'>
            {cart.length > 0? (cart.map(product => (
                <CartItem
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    onRemove={removeFromCart}
                />
            ))) : (
                <div>
                    <h3>Your cart is empty</h3>
                </div>
            )}
            <p>Cart total: {cart.reduce((total, product) => total + product.price, 0)}</p>
        </div>
    )
}

export default CartPage;