import {getTodos,createTodo, updateTodo,destroyTodo} from '../lib/todoServices';
import {showMessage} from "./messages";

const initState = { //empty initial state, but has the defined shape
    todos: [],
    currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE';
export const TODO_ADD = 'TODO_ADD';
export const TODOS_LOAD = 'TODOS_LOAD';
export const TODO_REPLACE = 'TODO_REPLACE';
export const TODO_DESTROY = 'TODO_DESTROY';

//Action Creators
export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val})
export const loadTodos = (todos)=> ({type: TODOS_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo})
export const replaceTodo = (todo) => ({type: TODO_REPLACE, payload: todo})
export const removeTodo = (id) => ({type: TODO_DESTROY, payload: id})
//////Async action creators
export const fetchTodos = () => { //action creator that returns a function
    return (dispatch) => { //thunk gives a reference to dispatch from redux
        dispatch(showMessage('Loading Todos'));
        getTodos() //returns a promise
            .then(todos => dispatch(loadTodos(todos))) //dispatches the load todos action that will update state, then update view
    }
}

//action creator for saving a todo
//invoked from the onsubmit of the todo form
export const saveTodo = (name) =>{
    return (dispatch) => {
        dispatch(showMessage('Saving Todo'))
        createTodo(name) //contains the service call for creating the todo item in database, asynchrous
            .then(res => dispatch(addTodo(res))) //dispatches the addToDo action to the reducers after the server call is done
    }
}

//find the todo to update in the state

export const toggleTodo = (id) => {
    return (dispatch,getState) => {
        dispatch(showMessage('Updating todo'))
        const {todos} = getState().todo; //deconstruct state to get todos out of the state object, multiple reducers namespace
        const todo = todos.find(t => t.id === id);
        const toggled = {...todo, isComplete: !todo.isComplete}
        updateTodo(toggled)
            .then(res => dispatch(replaceTodo(res)))
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        dispatch(showMessage('Deleting tod'))
        destroyTodo(id)
            .then(() => dispatch(removeTodo(id)))
    }
}
//the todo reducer action handlers, results are sent back to the components via mapStateToProps
export default (state = initState, action) => {
    switch(action.type){
        case TODO_ADD:
            return {...state, currentTodo: '', todos: state.todos.concat(action.payload)}

        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload}
        case TODOS_LOAD:
            return {...state, todos: action.payload}
        case TODO_REPLACE: //go through the todo array in the state, if the id matches then return the modified todo
            return {...state, todos: state.todos.map(t => t.id === action.payload.id ? action.payload: t)}
        case TODO_DESTROY:
            return {...state, todos: state.todos.filter(t => t.id !== action.payload)}
        default:
            return state
    }

}