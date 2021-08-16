
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { navigate } from '@reach/router';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if("serviceWorker" in navigator){
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js")
      .then(function (regitration) {
        console.log("service Worker registered");
        
      }, function (err) {
        console.log("Service Worker could not be registered. P10x")
      })
  })
}