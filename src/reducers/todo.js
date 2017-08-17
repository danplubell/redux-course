import {getTodos,createTodo} from '../lib/todoServices';
import {showMessage} from "./messages";

const initState = { //empty initial state, but has the defined shape
    todos: [],
    currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE';
const TODO_ADD = 'TODO_ADD';
const TODOS_LOAD = 'TODOS_LOAD';

//Action Creators
export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val})
export const loadTodos = (todos)=> ({type: TODOS_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo})
export const fetchTodos = () => { //action creator that returns a function
    return (dispatch) => { //thunk gives a reference to dispatch from redux
        getTodos() //returns a promise
            .then(todos => dispatch(loadTodos(todos))) //dispatches the load todos action that will update state, then update view
    }
}

export const saveTodo = (name) =>{
    return (dispatch) => {
        dispatch(showMessage('Saving Todo'))
        createTodo(name)
            .then(res => dispatch(addTodo(res)))
    }
}

export default (state = initState, action) => {
    switch(action.type){
        case TODO_ADD:
            return {...state, currentTodo: '', todos: state.todos.concat(action.payload)}

        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload}
        case TODOS_LOAD:
            return {...state, todos: action.payload}
        default:
            return state
    }

}