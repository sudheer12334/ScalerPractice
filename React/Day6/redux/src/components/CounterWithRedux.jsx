import {useSelector,useDispatch} from 'react-redux';

import {counterAction} from '../redux/slice/CounterSlice';

const CounterWithRedux = ()=>{
    //state data or methods .we get data from redux;
      // useSlector() -> to provide state data from slice via store
    // useDispatch() -> to methods from slice via store
    const count=useSelector((store)=>{
        return store.counter.count;
    });

    const dispatch = useDispatch();

    const handleIncrement = ()=>{
        dispatch(counterAction.increment());
    }

    const handleDecrement = ()=>{
        dispatch(counterAction.decrement( ));
    }
    return(
        <>
              <h2>Counter with redux</h2>
            <button onClick={handleIncrement }>+</button>
            <p>count: {count}</p>
            <button onClick={handleDecrement }>-</button>
        </>
    )
}
export default CounterWithRedux;