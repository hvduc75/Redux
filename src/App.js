import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "./action/actions";
import store from "./redux/store";
import { useSelector, useDispatch } from "react-redux";

function App(props) {
  const dispatch = useDispatch();

  const newCount = useSelector((state) => {
    return state.counter.count;
  });

  const handleIncrease = () => {
    // store.dispatch({
    //   type: 'test hoi dan it',
    //   payload: {'name' : "eric"}
    // })
    // props.increaseCounter();
    dispatch(increaseCounter());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world React with hvd75</p>
        <div>Count: {newCount}</div>
        <button onClick={() => handleIncrease()}>Increase Count</button>
        <button onClick={() => dispatch(decreaseCounter())}>
          Decrease Count
        </button>
      </header>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
