import React,{Component} from 'react';
import {connect} from 'react-redux';
import {updateCurrent,saveTodo} from '../reducers/todo';



class TodoForm extends Component {
    handleInputChange = (event) => {
        const val = event.target.value;
        this.props.updateCurrent(val); //from props sent in by mapDispatchToProps
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveTodo(this.props.currentTodo)
    }
    render(){
        const {currentTodo} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       value={currentTodo}
                       onChange={this.handleInputChange}
                />
            </form>

        )
    }
}

export default connect(
    (state) => ({currentTodo: state.todo.currentTodo}), //mapStateToProps, the todo namspace was added in the combine reducer
    {updateCurrent, saveTodo} //mapDispatchToProps, these are the dispatched actions, makes these actions available on props in component
)(TodoForm)