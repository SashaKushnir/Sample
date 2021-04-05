import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { BeforeApp } from "./BeforeApp";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <CookiesProvider>
                    <BeforeApp/>
                </CookiesProvider>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
