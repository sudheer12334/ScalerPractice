 import CartContext from "./CartContext";
 import {useState} from 'react';

 const ContextProvider=({children})=>{
    const [cartState,setCartState] = useState({});

    const [totalQuantity,setTotalQuantity] = useState(0);

    const addToCart=(product)=>{
        const updatedCart ={...cartState};
        if(updatedCart[product.id]) {
            updatedCart[product.id].quantity+=1;

        }else{
            updatedCart[product.id]=  {...product,quantity:1};
        }

        setTotalQuantity(totalQuantity+1);
        setCartState(updatedCart);
    }
    const removeFromCart=(productId)=>{
        const updatedCart= {...cartState};
        updatedCart[productId].quantity-=1;

        if(updatedCart[productId].quantity<=0){
            delete updatedCart[productId];
        }
        
        setTotalQuantity(totalQuantity-1);
        setCartState(updatedCart);
    }
    const cartContextValue={
        cart : cartState,
        totalQuantity,
        addToCart,
        removeFromCart
    };
    
    return(
        <>
            <CartContext.Provider value={cartContextValue}>
                {children}
            </CartContext.Provider>
        </>
    )
 }
export default ContextProvider;