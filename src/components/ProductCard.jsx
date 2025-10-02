import { Link } from "react-router-dom";

function ProductCard({product}){
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

                
            </div>
        </div>
    )
}
export default ProductCard;