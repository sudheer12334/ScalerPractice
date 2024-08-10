import {useSelector,useDispatch} from 'react-redux';

import {counterInputActions} from '../redux/slice/CounterInputSlice';

const CounterInputWithRedux = ()=>{
    //state data or methods .we get data from redux;
      // useSlector() -> to provide state data from slice via store
    // useDispatch() -> to methods from slice via store

    const counterObj=useSelector((store)=>{
        return store.counterInput;
    });
    const {count,delta}=counterObj;
    const dispatch = useDispatch();

    const handleIncrement = ()=>{
        dispatch(counterInputActions.increment());
    }

    const handleDecrement = ()=>{
        dispatch(counterInputActions.decrement());
    }

    const changeHandler=(event)=>{
        const val=Number(event.target.value);
        dispatch(counterInputActions.updateDelta(val));

    }
    return(
        <>
            <h2>Counter with redux</h2>
            <button onClick={handleIncrement }>+</button>
            <p>count: {count}</p>
            <button onClick={handleDecrement }>-</button>
            <input type="text" value={delta} onChange={changeHandler}/>
        </>
    )

}

export default CounterInputWithRedux;