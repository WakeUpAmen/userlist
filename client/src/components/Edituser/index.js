import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import * as actions from '../../Reducers';
import {connect} from 'react-redux';

class EditUser extends Component{
    componentWillMount=()=>{
        this.props.getOneUserById("http://localhost:8888/api/userlist/"+this.props.match.params.userId, this.props.match.params.userId);
    }
    getUserInfo = () => {
        let user ={firstname: this.props.firstname, lastname: this.props.lastname, sex: this.props.sex, age: this.props.age, pwd: this.props.pwd}
        this.props.updateOneToServer("http://localhost:8888/api/userlist/"+this.props.match.params.userId, user);
    }
    fnchange=(e)=>{
        this.props.setFirstNameOnChange(e.target.value);
    }
    lnchange=(e)=>{
        this.props.setLasttNameOnChange(e.target.value);
    }
    sexchange=(e)=>{
        this.props.setSexOnChange(e.target.value);
    }
    agechange=(e)=>{
        this.props.setAgeOnChange(e.target.value);
    }
    pwdchange=(e)=>{
        this.props.setPwdOnChange(e.target.value);
    }
    render (){
        return(
            <div className=".div-container">
                <label>First Name:</label>
                <input type="text" value = {this.props.firstname} onChange={this.fnchange}/><br/>
                <label>Last Name:</label>
                <input type="text" value = {this.props.lastname} onChange={this.lnchange} /><br/>
                <label>Sex:</label>
                <input type="text" value = {this.props.sex} onChange={this.sexchange} /><br/>
                <label>Age:</label>
                <input type="text" value = {this.props.age} onChange={this.agechange}/><br/>
                <label>Pwd:</label>
                <input type="text" value = {this.props.pwd} onChange={this.pwdchange}/><br/>
                <label>Pwd again:</label>
                <input type="text" value = {this.props.pwd}/><br/>
                <button onClick ={this.getUserInfo} >Save User</button>  
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        firstname: state.firstname,
        lastname: state.lastname,
        sex: state.sex,
        age: state.age,
    }
};

function mapDispatchToProps(dispatch) {
    return({
        updateOneToServer:(url, index) => {dispatch(actions.updateOneToServer(url, index))},
        getOneUserById:(id) => {dispatch(actions.getOneUserById(id))},
        setFirstNameOnChange:(text)=>{dispatch(actions.setFirstNameOnChange(text))},
        setSexOnChange:(text) => {dispatch(actions.setSexOnChange(text))},
        setAgeChange:(text) => {dispatch(actions.setAgeOnChange(text))},
        setLastNameOnChange:(text) => {dispatch(actions.setLastNameOnChange(text))},
        setPwdOnChange:(text) => {dispatch(actions.setPwdOnChange(text))},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);