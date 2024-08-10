// import { useState } from 'react'
// // import './App.css'
// import InfiniteScroll from './InfiniteScroll'
// import Stopwatch from './stopwatch'
// import Stopwatch1 from './Stopwatch1'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//       {/* <Stopwatch/> */}
//       {/* <InfiniteScroll/> */}
//       <Stopwatch1/>
//       </div>
//     </>
//   )
// }

// export default App;


// App.js
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { addToCart, removeFromCart, updateQuantity, applyCoupon } from './cartSlice';

const App = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const couponCode = useSelector((state) => state.cart.couponCode);

    const handleAddToCart = () => {
        const item = { id: 1, name: 'Product 1', price: 100 };
        dispatch(addToCart(item));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateQuantity({ itemId: id, quantity }));
    };

    const handleApplyCoupon = (code) => {
        dispatch(applyCoupon(code));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <div>
                {cart.map((item) => (
                    <div key={item.id}>
                        <p>{item.name} - Quantity: {item.quantity}</p>
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>Increase Quantity</button>
                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>Decrease Quantity</button>
                    </div>
                ))}
            </div>
            <div>
                <input type="text" placeholder="Coupon Code" onBlur={(e) => handleApplyCoupon(e.target.value)} />
                <p>Applied Coupon: {couponCode}</p>
            </div>
        </div>
    );
};

const RootApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default RootApp;
