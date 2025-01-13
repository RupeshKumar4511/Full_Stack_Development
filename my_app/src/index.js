import React from 'react';
//This imports the React library, which is needed to use JSX and create components. Although modern React no longer requires importing React directly for JSX (since React 17),

import ReactDOM from 'react-dom/client';
//ReactDOM is the package that renders React components to the DOM (Document Object Model). In React 18, ReactDOM.createRoot was introduced, and this import is specifically for accessing that feature.
import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';
// This imports the function used for measuring the performance of your app. It's optional and useful if you want to track performance metrics like page load time, interaction speed, etc.


const root = ReactDOM.createRoot(document.getElementById('root'));
//It creates a "root" where the React component tree will be rendered.


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// This is where the App component (the main component of your application) gets rendered into the DOM.





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
