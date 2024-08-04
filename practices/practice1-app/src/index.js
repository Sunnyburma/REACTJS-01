import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import State1 from "./state1"
import reportWebVitals from './reportWebVitals';
import Api from "./Api1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State1/> */}
    <Api />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
