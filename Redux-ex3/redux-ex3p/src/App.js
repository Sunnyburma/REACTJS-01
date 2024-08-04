import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';


function App() {
  const res = useSelector(state=>state);
  const dispatch = useDispatch();
  const deposite = ()=>{
    dispatch({type:"DEPOSITE", payload : 10000});
  }
  const withdraw = ()=>{
    dispatch({type:"WITHDRAW", payload:500});
  }
  return (
    <div className="App">
      <h1>{JSON.stringify(res)}</h1>
      <button onClick={deposite}>Deposite</button>
      <button onClick={withdraw}>Withdraw</button>
    </div>
  );
}

export default App;
