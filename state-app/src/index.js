import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State1 from './state1';
import State2 from './state2';
import State5 from './State5';
import State3 from './State3';
import Events from './Events';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <State1/> */}
    {/* <State2 /> */}
    <State5 />
    {/* <State3 /> */}
    {/* <Events/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
