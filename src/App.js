import logo from "./logo.svg";
import "./App.css";
import { increaseCounter, decreaseCounter } from "./action/actions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
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

  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    const data = res && res.data ? res.data : [];
    console.log("check data: ", data);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Hello world React with hvd75</p>
    //     <div>Count: {newCount}</div>
    //     <button onClick={() => handleIncrease()}>Increase Count</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>
    //       Decrease Count
    //     </button>
    //   </header>
    // </div>
    <Home/>
  );
}

export default App;
