import ProductCard from "./ProductCard";
import "./Products.scss";

const ProductList = ({products}) => {
  // console.log(products);
  return (
    <div className="products-list">
      
      {products.map((items)=>(
           <ProductCard {...items} key={items.id}/>
           ))}
    </div>
  )
}

export default ProductList