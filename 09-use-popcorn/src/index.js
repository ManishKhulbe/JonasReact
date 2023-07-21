import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppV1 from "./App-v1";
import StarRating from './StarRating';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppV1/>
    {/* <StarRating maxRating={10} /> */}
  </React.StrictMode>
);


