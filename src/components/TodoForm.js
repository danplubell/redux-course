import React from 'react';
import {connect} from 'react-redux';
import {updateCurrent} from '../reducers/todo';

const TodoForm =  (props) => {
    /*destructure props*/
    const {currentTodo,updateCurrent} = props;
    const handleInputChange = (event) => {
        const val = event.target.value;
        updateCurrent(val);
    }
    return (
            <form>
                <input type="text"
                       value={currentTodo}
                        onChange={handleInputChange}
                />
            </form>

    )

}

export default connect(
    (state) => ({currentToDo: state.currentTodo}), //mapStateToProps
    {updateCurrent} //mapDispatchToProps
)(TodoForm)