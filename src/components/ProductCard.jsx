import { Link } from "react-router-dom";

function ProductCard({product, addToCart}){
    return(
        <div className="card">
            <img src = {product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <div className="actions">
                <Link to ={`/product/${product.id}`}>
                <button>View Details</button>
                </Link>
                <button onClick={() => addToCart(product)}>Add to Cart</button>

                
            </div>
        </div>
    )
}
export default ProductCard;