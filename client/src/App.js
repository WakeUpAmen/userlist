import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import NewUser from './components/NewUser';
import Pages from './components/Pages';
import SearchBar from './components/SearchBar';
import UserRow from './components/UserRow';
import UserTable from './components/UserTable';
import * as actions from './Reducer';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

class App extends Component {
    componentDidMount(){
        this.props.getAllUsers("http://localhost:8888/api/userlist/");
    }
    handleFilterTextChange = (filterText) => {
        this.props.setFilterText(filterText);
    }

    handleNewUser = (dataFromChild) => {
        if(dataFromChild._id == undefined || dataFromChild._id == ""){
            this.props.addOneToServer("http://localhost:8888/api/userlist/", dataFromChild);
        }else{
            this.props.updateOneToServer("http://localhost:8888/api/userlist/"+dataFromChild._id, dataFromChild);
        }
        this.props.setEditFlag(false);
        this.props.setNewFlag(false);
    }
    myCallback_edit =(index)=>{
        this.props.editPerson(index);
        this.props.setEditFlag(true);
    }

    myCallback_delete = (index)=>{
        this.props.deleteOneUser("http://localhost:8888/api/userlist/"+index, index);
    }
    create=()=>{
        this.props.setNewFlag(true);
    }
    addPage =()=>{
        this.props.addOnePage();
    }
    minusPage =()=>{
        this.props.minusOnepage();
    }
    fnSort =(str)=>{
        this.props.setSort(str);
    }
    render() {
        return (
            <div class="div-container"><br/>
                <BrowserRouter>
                <div> 
                <Switch>
                    <Route exact={true} path="/" render={()=>{ return(
                        <div>
                        <SearchBar filterText={this.props.filterText} onFilterTextChange={this.handleFilterTextChange}/>
                        <UserTable
                            users={this.props.users}
                            filterText={this.props.filterText}
                            setHidden ={this.create}
                            editRowCallBack={this.myCallback_edit}
                            deleteRowCallBack={this.myCallback_delete}
                            // itemNum = {this.state.itemNum}
                            itemNum = {5}
                            page = {this.props.page}
                            fnsort = {this.fnSort}
                            lnsort ={this.fnSort}
                            sexsort={this.fnSort}
                            agesort={this.fnSort}
                        />
                        <Pages minusOnepage = {this.minusPage} addOnePage = {this.addPage} pre = {this.props.pre} older = {this.props.older}/>
                        <button  class="buttons app-button" onClick ={this.create} ><Link to="/user">Cerate new user</Link></button>
                        </div>
                    )}}
                    />
                    <Route path="/user" render={()=><NewUser 
                                                        editFlag = {this.props.editFlag} 
                                                        _id = {this.props._id} 
                                                        firstname ={this.props.firstname} 
                                                        lastname ={this.props.lastname} 
                                                        sex={this.props.sex} 
                                                        age={this.props.age}
                                                        pwd={this.props.pwd}
                                                        createNewUser ={this.handleNewUser} 
                                                    />
                                        }
                    />
                </Switch>
                </div>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        _id: state._id,
        firstname: state.firstname,
        lastname:state.lastname,
        sex: state.sex,
        age:state.age,
        pwd: state.pwd,
        editFlag: state.editFlag,
        newFlag: state.newFlag,
        filterText: state.filterText,
        userinfo: state.userinfo,
        page: state.page,
        itemNum: state.itemNum,
    }
};

function mapDispatchToProps(dispatch) {
    return({
        setFilterText:(text) =>{actions.setFilterText.text=text,dispatch(actions.setFilterText)},
        //   setFilterText:(text) =>{dispatch(actions.setFilterText(text))},
        //   editPerson: (id)=>{dispatch(actions.editPerson(id))},
        editPerson: (id)=>{actions.editPerson.id=id, dispatch(actions.editPerson)},
        setEditFlag: (flag)=>{actions.setEditFlag.editFlag=flag, dispatch(actions.setEditFlag)},
        setNewFlag: (flag)=>{actions.setNewFlag.newFlag=flag, dispatch(actions.setNewFlag)},
        //   setEditFlag: (flag)=>{dispatch(actions.setEditFlag(flag))},
        //   setNewFlag: (flag)=>{dispatch(actions.setNewFlag(flag))},

        // setPage: (page)=>{dispatch(actions.setPage(page))},
        addOnePage: () =>{dispatch(actions.pageIncrement)},
        minusOnepage:() =>{dispatch(actions.pageDecrement)},
        // setSort:(str) =>{dispatch(actions.setSort(str))},
        setSort:(str) =>{actions.setSort.str=str, dispatch(actions.setSort)},
        addOneToServer:(url, userdata) =>{ dispatch(actions.addOneToServer(url, userdata))},
        getAllUsers: (url) =>{dispatch(actions.getAllUsersFromServer(url))},
        deleteOneUser:(url, id) =>{dispatch(actions.deleteOneFromServer(url, id))},
        updateOneToServer:(url, userdata) => {dispatch(actions.updateOneToServer(url, userdata))},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
