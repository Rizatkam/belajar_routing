import React, { Component } from 'react';
import {Switch, BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';

class App extends Component{
  render(){
    return(
      <div>
      <Router>
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      </Switch>
      </Router>
      </div>
    )
  }
}


export default App;
