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
                    users={this.props.users}
                    filterText={this.props.filterText}
                    deleteOneUser={this.deleteOneUser}
                    itemNum = {5}
                    page = {this.props.page}
                    fnsort = {this.setSort}
                    lnsort ={this.setSort}
                    sexsort={this.setSort}
                    agesort={this.setSort}
                />
                <Pages minusOnepage = {this.props.minusOnepage} addOnePage = {this.props.addOnePage} pre = {this.props.pre} older = {this.props.older}/>
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
        filterText: state.searchBarR.filterText,
        page: state.myUserListR.page,
        hasErrored: state.myUserListR.hasError,
        dataLoading: state.myUserListR.dataLoading,
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
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
