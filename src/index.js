import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'babel-polyfill';
import Router from './components/Router';

ReactDOM.render(
    <HashRouter>
        <Router/>
    </HashRouter>,
    document.getElementById('app')
);