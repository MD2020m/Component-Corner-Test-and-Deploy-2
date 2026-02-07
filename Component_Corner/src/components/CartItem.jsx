function CartItem({key, name, price, onRemove}) {
    const remove = () => {
        onRemove(name);
    }
    
    return (
    <div>
        <h1>{name}</h1>
        <p>{price}</p>
        <button onClick={remove}>
            <p>Remove from cart</p>
        </button>
    </div>
    );
}

export default CartItem;