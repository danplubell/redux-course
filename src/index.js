import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    //provider takes care of getting the state and subscribing to state changes
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));



registerServiceWorker();
