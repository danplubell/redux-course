import {createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import todoReducer from './reducers/todo';
import messageReducer from './reducers/messages';
import thunk from 'redux-thunk'; //handles asynch dispatches

//set up for multiple reducers
//creates namespaces in state
const reducer = combineReducers({
    todo: todoReducer,
    message: messageReducer
})

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))); //use this to dispatch asynchronous actions