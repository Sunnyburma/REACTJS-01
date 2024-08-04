import React from "react";
import { useSelector, useDispatch } from "react-redux";

//useSelector() hook, used to perform the subscription.
//useDispatch() hook, used to perform the dispatch operation.


function App() {
  const res = useSelector(state=>state);
  const dispatch = useDispatch();
  const deposite = ()=>{
    dispatch({type:"DEPOSITE", payload:10000});
  }
  const withdraw = ()=>{
    dispatch({type:"WITHDRAW", payload:6000});
  }
  return (
    <div className="App">
      <h1>{JSON.stringify(res)}</h1>
      <button onClick={deposite}>deposite</button>
      <button onClick={withdraw}>withdraw</button>
    </div>
  );
}

export default App;
