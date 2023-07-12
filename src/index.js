import React from 'react';
import ReactDOM from "react-dom/client";


import { Provider } from 'react-redux';
import { store } from './store';

//Pages
// import Home from "./pages/home";
// import Login from "./pages/login";
// import Register from "./pages/register";
//import { createRoot } from 'react-dom/client';
//import { Provider } from 'react-redux';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);