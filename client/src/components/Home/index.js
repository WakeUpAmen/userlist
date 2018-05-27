import React, { Component } from 'react';
import {connect} from 'react-redux';
import Pages from './Pages';
import SearchBar from './SearchBar';
import UserTable from './UserTable';
import * as actions from '../../actions';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

class Home extends Component {
    componentWillMount(){
        console.log("home did mount")
        this.props.getAllUsers("http://localhost:8888/api/userlist/");
    }
    handleFilterTextChange = (filterText) => {
        this.props.setFilterText(filterText);
    }

    deleteOneUser = (index)=>{
        this.props.deleteOneUser("http://localhost:8888/api/userlist/"+index, index);
    }
    setSort =(str)=>{
        this.props.setSort(str);
    }
    render() {
        console.log("home render")
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
        users: state.users,
        filterText: state.filterText,
        page: state.page,
    }
};

function mapDispatchToProps(dispatch) {
    console.log("home dispatch")
    return({
        setFilterText:(text) =>{actions.setFilterText.text=text,dispatch(actions.setFilterText)},
        addOnePage: () =>{dispatch(actions.pageIncrement)},
        minusOnepage:() =>{dispatch(actions.pageDecrement)},
        setSort:(str) =>{actions.setSort.str=str, dispatch(actions.setSort)},
        getAllUsers: (url) =>{dispatch(actions.getAllUsersFromServer(url))},
        deleteOneUser:(url, id) =>{dispatch(actions.deleteOneFromServer(url, id))},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
