import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

function ProductList(){
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log("Cart: ", newCart);
        
    }
    return (
        <div>
         <h1> Fashion Store</h1>
         <div className="grid">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
         </div>
        </div>
    )
}
export default ProductList;