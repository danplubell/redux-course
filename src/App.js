import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
          <Router>
              <div className="Todo-App">
                  <Message />
                  <TodoForm />
                  <Route path='/:filter?' render={({match})=>(
                      <TodoList filter={match.params.filter}/>
                  )}/>

                  <Footer />
              </div>
          </Router>
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

//moved all the connections to store down to the components
//shorten all that down to...
export default App
