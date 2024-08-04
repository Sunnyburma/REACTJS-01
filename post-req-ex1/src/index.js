import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Postreq from './postreq';
// import Getreq from './getreq';
// import Login from './Login';
// import Loginref from './loginref';
// import Loginref1 from './loginref1';
import Cart from './DummyJSON/cart';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Postreq /> */} 
    {/* <Getreq /> */}
    {/* <Login /> */}
    {/* <Loginref /> */}
    {/* <Loginref1/> */}
    <Cart />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
