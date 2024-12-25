import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Hook_ControlledButtonState from './counter.js'
ReactDOM.render(
 <React.Fragment>
 <Hook_ControlledButtonState/>
 </React.Fragment>
 ,
 document.getElementById('root')
 )
 serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


