import ProductCard from '../components/ProductCard';

function ProductsPage({ products, addToCart }) {

    return (
        <div className='products-page'>
            <h1>Products</h1>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                    handleAddToCart={addToCart}
                />
            ))}
        </div>
    )
}

export default ProductsPage;