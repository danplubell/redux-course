import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import {bindActionCreators} from 'redux';
import {updateCurrent} from './reducers/todo';
import registerServiceWorker from './registerServiceWorker';

//const todoChangeHandler = (val) => store.dispatch(updateCurrent(val))

//bind actions to name value pairs of functions and action creators
//name value pairs of function and action creators and reference to dispatch function

//const actions = bindActionCreators({
//    todoChangeHandler: updateCurrent}, store.dispatch);
//this can be changed to:

const actions = bindActionCreators({updateCurrent}, store.dispatch);

const render = () => {
    const state = store.getState();
    ReactDOM.render(<App todos={state.todos}
                         currentTodo={state.currentTodo}
                         changeCurrent={actions.updateCurrent} //get change handler from bound actions
                    />,
        document.getElementById('root'));

}
render();
store.subscribe(render);


registerServiceWorker();
