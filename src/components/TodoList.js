import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from '../reducers/todo';

const TodoItem = ({id, name, isComplete})=> (
    <li>
        <input type="checkbox" defaultChecked={isComplete}/> {name}
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
                    {this.props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => ({todos: state.todos}), //mapStateToProps
    {fetchTodos} //mapDispatchToProps
)(TodoList)