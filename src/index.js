import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/router';
import rootReducer from './reducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import "./App.scss";

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('container')
);
