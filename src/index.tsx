import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.variable.min.css'
import 'react-calendar/dist/Calendar.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
