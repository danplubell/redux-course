import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos,toggleTodo, deleteTodo,getVisibleTodos} from '../reducers/todo';

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo})=> (

    <li>
        <span className='delete-item'>
            <button onClick={() => deleteTodo(id)}>X </button>
        </span>
        <input type="checkbox"
               checked={isComplete}
               onChange={() => toggleTodo(id)}/>
        {name}
    </li>

)
class  TodoList extends Component {
    componentDidMount () {
        this.props.fetchTodos() //this is passed in from the mapDispatchToProps, exported by ../reducers/todo
    }
    render(){
        return (
            <div className="Todo-List">
                <ul>
                    {this.props.todos.map(todo => <TodoItem key={todo.id}
                                                            toggleTodo={this.props.toggleTodo}
                                                            deleteTodo={this.props.deleteTodo}{...todo}/>)}
                </ul>
            </div>
        )
    }
}

export default connect(
    //ownProps == props that are attached directly to component
    //the filter came from the router setup in App.js
    (state,ownProps) => ({todos: getVisibleTodos(state.todo.todos,ownProps.filter)}), //mapStateToProps todo namespace added in combine reducer
    {fetchTodos,toggleTodo, deleteTodo} //mapDispatchToProps
)(TodoList)