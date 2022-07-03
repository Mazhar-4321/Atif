import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Masti from './Components/Component1'
import { Alert } from 'bootstrap';
import TicTacToe from './Components/TicTacToe';
import Payments from './Components/Payments'
import Account from './Components/Account'
import BasicExample from './Components/BasicExample';
import W3School from './Components/W3Schools';
ReactDOM.render(
  <React.StrictMode>
   
  <BasicExample />
   
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
