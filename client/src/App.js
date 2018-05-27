import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Newuser from './components/Newuser';
import Edituser from './components/Edituser';

/* App component */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/edituser/:userId" component={Edituser} />
            <Route path="/newuser" component={Newuser} />
            </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
