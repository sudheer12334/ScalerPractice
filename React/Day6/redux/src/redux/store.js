import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './slice/CounterSlice';
import CounterInputReducer from './slice/CounterInputSlice';
export const store = configureStore(
    {
        reducer: {
            counter: CounterReducer,
            counterInput: CounterInputReducer,
        }
    }
)