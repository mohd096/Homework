import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CodeSandbox from './CodeSandbox';
import reportWebVitals from './reportWebVitals';

// const post = {
//   kitchen : "kitchen",
//   LivingRoom : "Living Room",
//   bedrooms : ["Bed-Room-one",
//   "Bed-Room-two",
//   "Bed-Room-three"
//   ],
//   Bath : [ "Bathroom-1",
//   "Bathroom-1"]
// }
// const kitchen = {
//   Oven : "Oven",
//   Sink : "Sink"
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <CodeSandbox />


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
