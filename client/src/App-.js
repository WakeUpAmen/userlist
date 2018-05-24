import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import UserList from './components/UserList';
import NewUser from './components/NewUser';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

class App extends Component {
   render(){
        return(
        <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" Component={UserList} />
            <Route path="/newuser" Component={NewUser} />
            <Route path="/edituser" Component ={NewUser} />
        </Switch>
        </BrowserRouter>
        )
   }
}



export default App;
