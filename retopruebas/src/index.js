import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Checkbox from './components/checkbox';
import Like from './components/like';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Checkbox labelActive='Active' labelInactive='Inactive'/>
  <Like/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
