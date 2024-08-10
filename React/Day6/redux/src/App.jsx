// import Counter from "./components/withoutRedux"
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import CounterWithRedux from "./components/CounterWithRedux";
 import CounterInputWithRedux from "./components/CounterInputWithRedux";
const App = () => {

  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <CounterWithRedux />
      <CounterInputWithRedux />
     </Provider>

  )
}

export default App