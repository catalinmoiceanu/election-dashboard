import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import 'babel-polyfill';
import Router from './components/router';
import { configureStore } from './store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Router/>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);