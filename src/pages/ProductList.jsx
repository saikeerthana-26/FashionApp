import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data";
import FilterPanel from "../components/FilterPanel";

function ProductList(){
    const [cart, setCart] = useState([]);
    const [filters, setFilters] = useState({type: "", gender: "", material: ""});
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log("Cart: ", newCart);
        
    }
    const filteredProducts = products.filter((p) => {
        return(
            (filters.type === "" || p.type === filters.type) &&
            (filters.gender === "" || p.gender=== filters.gender) &&
            (filters.material === "" || p.material === filters.material) 
        );
    });

    return (
        <div>
         <h1> Fashion Store</h1>
         <FilterPanel filters={filters} setFilters={setFilters}/>
         <div className="grid">
            {filteredProducts.map((product)=>(
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
         </div>
        </div>
    )
}
export default ProductList;