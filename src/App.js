import "./App.css";
import { increaseCounter, decreaseCounter } from "./action/actions";
import { useSelector, useDispatch } from "react-redux";
import Home from "./component/Home";

function App(props) {
  const dispatch = useDispatch();

  const newCount = useSelector((state) => {
    return state.counter.count;
  });

  // event Handle
  const handleIncrease = () => {
    dispatch(increaseCounter());
  };

  return <Home />;
}

export default App;
