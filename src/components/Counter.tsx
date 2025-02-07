import { useShallow } from "zustand/shallow";
import useCounterStore from "../store/counter-store";

const Counter = () => {
  const { count, decrement, increment } = useCounterStore(
    useShallow((state) => state)
  );

  return (
    <div className="counter-container">
      <h1>Счетчик: {count}</h1>
      <div className="button-group">
        <button onClick={decrement} className="counter-button decrement">
          Уменьшить
        </button>
        <button onClick={increment} className="counter-button increment">
          Увеличить
        </button>
      </div>
    </div>
  );
};

export default Counter;
