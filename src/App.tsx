import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './store/counterSlice';
import {RootState} from './store';

const App = () => {
  const counter = useSelector<RootState, number>((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
        <div>Counter: {counter}</div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
