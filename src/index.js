// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import App from './App';
// import './styles/globals.css';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
 // src/index.js
 import React from 'react';
 import ReactDOM from 'react-dom/client'; // Updated import
 import { Provider } from 'react-redux';
 import store from './redux/store';
 import App from './App';
 import './styles/globals.css';
 
 const root = ReactDOM.createRoot(document.getElementById('root')); // Updated
 root.render(
   <Provider store={store}>
     <App />
   </Provider>
 );
 
 
 