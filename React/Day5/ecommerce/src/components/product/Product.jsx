import ProductListing from "../../pages/productListing/ProductListing";
import AddToCart from "../addToCart/AddToCart";
import './product.css'
//import AddToCart  from "../addToCart/AddToCart";
const Product = ({ product }) => {
  return (
    <>
      <div className="product-item">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <div className="product-details">
          <div className="product-title">{product.title}</div>
          <div className="buy-item">
            <div className="product-price">Price: ${product.price}</div>
            <AddToCart product={product}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
