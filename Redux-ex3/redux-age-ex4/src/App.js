import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const  res = useSelector(state=>state);
    const dispatch = useDispatch() ;
    const age_up = ()=>{
      dispatch({type:"AGE_UP", payload:1});
    }
    const age_down = ()=>{
      dispatch({type:"AGE_DOWN", payload:1})
    }
  return (
    <div className="App">
      <h1>{JSON.stringify(res)}</h1>
      <button onClick={age_up}>AGE_UP</button>
      <button onClick={age_down}>AGE_DOWN</button>
      
    </div>
  );
}

export default App;
