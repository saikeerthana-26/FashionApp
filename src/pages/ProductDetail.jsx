import { useParams } from "react-router-dom";
import { products } from "../data";

function ProductDetail() {
    const {id} = useParams();
    const product = products.find((p) => p.id === Number(id));

    if(!product)
        return <h2>Product not found!</h2>

    const handleAdd = () => {
        console.log("Added to cart:", product);
    };

    return(
        <div className="detail">
            <img src ={product.image} alt = {product.name}/>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button onClick={handleAdd}>Add to Cart</button>

        </div>
    )
}
export default ProductDetail;