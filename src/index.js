import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/router';
import store from "./store"
import "./App.scss";


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
    ,
    document.getElementById('container')
);
