import ProductCard from "../components/ProductCard";
import { products } from "../data";

function ProductList(){
    return (
        <div>
         <h1> Fashion Store</h1>
         <div className="grid">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
         </div>
        </div>
    )
}
export default ProductList;