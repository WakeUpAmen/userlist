import React, { Component } from 'react';
import {connect} from 'react-redux';
import Pages from './Pages';
import SearchBar from './SearchBar';
import UserTable from './UserTable';
import * as actions from '../../actions';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

class Home extends Component {
    componentDidMount(){
        console.log("home did mount")
        this.props.getAllUsers();
        this.props.editUserCompleted(false);
        this.props.newUserCompleted(false);
        console.log(this.props.pageUsers)
        // this.props.deleteUserCompleted(false);
    
    }
    handleFilterTextChange = (filterText) => {
        this.props.setFilterText(filterText);
    }

    deleteOneUser = (index)=>{
        this.props.deleteOneUser(index);
    }
    setSort =(str)=>{
        this.props.setSort(str);
    }
    getPageUsers=(page)=>{
        this.props.getPageUsers(page);
    }
    render() {
        console.log("home render")
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.dataLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div className="div-container">
                <SearchBar filterText={this.props.filterText} onFilterTextChange={this.handleFilterTextChange}/>
                <UserTable
                    users={this.props.pageUsers}
                    filterText={this.props.filterText}
                    deleteOneUser={this.deleteOneUser}
                    itemNum = {5}
                    page = {this.props.page}
                    fnsort = {this.setSort}
                    lnsort ={this.setSort}
                    sexsort={this.setSort}
                    agesort={this.setSort}
                    // deleteUserCompleted={this.props.deleteUserCompleted}
                />
                <Pages 
                    minusOnepage = {this.props.minusOnepage} 
                    addOnePage = {this.props.addOnePage} 
                    page = {this.props.page} 
                    pages={this.props.filteredUsers.length/5 == Math.floor(this.props.filteredUsers.length/5)? this.props.filteredUsers.length/5 : Math.floor(this.props.filteredUsers.length/5)+ 1}
                    getPageUsers={this.getPageUsers}
                />
                <button className="buttons" ><Link to="/newuser">Cerate new user</Link></button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("home index")
    console.log(state.users)
    return {
        users: state.myUserListR.users,
        filteredUsers: state.myUserListR.filteredUsers,
        pageUsers: state.myUserListR.pageUsers,
        filterText: state.myUserListR.filterText,
        page: state.myUserListR.page,
        hasErrored: state.myUserListR.hasError,
        dataLoading: state.myUserListR.dataLoading,
        deleteUserCompleted: state.deleteUserCompleted,
    }
};

function mapDispatchToProps(dispatch) {
    console.log("home dispatch")
    return({
        setFilterText:(text) =>{dispatch(actions.setFilterText(text))},
        addOnePage: () =>{dispatch(actions.pageIncrement)},
        minusOnepage:() =>{dispatch(actions.pageDecrement)},
        setSort:(str) =>{actions.setSort.str=str, dispatch(actions.setSort)},
        getAllUsers: () =>{dispatch(actions.getAllUsersFromServer())},
        deleteOneUser:(id) =>{dispatch(actions.deleteOneFromServer(id))},
        editUserCompleted:(val) =>{dispatch(actions.editUserCompleted(val))},
        newUserCompleted:(val) => {dispatch(actions.newUserCompleted(val))},
        getPageUsers:(page)=>{dispatch(actions.getPageUsers(page))},
        // deleteUserCompleted: (val) => {dispatch(actions.deleteUserCompleted(val))},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
