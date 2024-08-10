import { createSlice } from '@reduxjs/toolkit';
const CounterInputSlice = createSlice({

    // intial state
    name: 'counterInput',
    initialState: {
        count: 0,
        delta:1,
    },

    reducers: {
        increment: (state) =>{
            state.count+=state.delta;
        },

        decrement: (state) => {
            state.count-=state.delta;
        },
        
        updateDelta: (state,action)=>{
            state.delta=action.payload;
        },
    }
});


export default CounterInputSlice.reducer;

export const counterInputActions = CounterInputSlice.actions;