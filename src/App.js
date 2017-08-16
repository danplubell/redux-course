import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {updateCurrent} from './reducers/todo';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <div className="Todo-App"></div>
          <TodoForm currentTodo={this.props.currentTodo}
            changeCurrent={this.props.updateCurrent}
          />
          <TodoList todos={this.props.todos}/>
      </div>
    );
  }
}

//const actions = bindActionCreators({updateCurrent}, store.dispatch); //using shorthand notation for name value pairs

//export default App;
//create connected app
//const mapStateToProps = (state) => state; //represents the subset of state to pass to component, in this case we want it all
//provider and connect function work together to get props to component

//const mapDispatchToProps = {updateCurrent}; //updateCurrent is the action creator from the reducer todo.js

//const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App);
//export default ConnectedApp;

//shorten all that down to...
export default connect(
    (state)=> state,
    {updateCurrent}
    )(App);
