
import './addToCart.css'
import  useCart  from '../../context/cart/useCart';
// import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
const AddToCart=({product})=>{
    
   const {cart,addToCart,removeFromCart } = useCart();
//    useContext(CartContext);
   const itemInCart=cart[product.id];
   const quantity=itemInCart ? itemInCart.quantity:0;
//   const value= useContext(CartContext);
    return(
        <div className="add-to-cart">
        {
          itemInCart ? (
            <>
              <div onClick={()=>{removeFromCart(product.id)}} className="add remove">
                -
              </div>
              <div className="quantity">{quantity}</div>
              <div onClick={()=>{addToCart(product)}} className="add">
                +
              </div>
            </>
          ): (
            <button onClick={()=>{addToCart(product)}} className="add">
              Add to Cart
            </button>
          ) 
        }
      </div>
    )
}
export default AddToCart;