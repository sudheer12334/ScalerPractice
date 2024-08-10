// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    couponCode: null,
    availableCoupons: {
        'SAVE10': 10, // 10% discount
        'SAVE20': 20  // 20% discount
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push({ ...action.payload, quantity: 1 });
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.itemId);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        applyCoupon: (state, action) => {
            if (state.availableCoupons[action.payload]) {
                state.couponCode = action.payload;
            } else {
                state.couponCode = null;
            }
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, applyCoupon } = cartSlice.actions;

export default cartSlice.reducer;
