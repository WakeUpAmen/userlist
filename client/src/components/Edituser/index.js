import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import * as actions from '../../actions';
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
            <div className="div-container">
                <label className="labels">First Name:</label>
                <input className="input-textboxes" type="text" value = {this.props.firstname} onChange={this.fnchange}/><br/>
                <label className="labels">Last Name:</label>
                <input className="input-textboxes" type="text" value = {this.props.lastname} onChange={this.lnchange} /><br/>
                <label className="labels">Sex:</label>
                <input className="input-textboxes" type="text" value = {this.props.sex} onChange={this.sexchange} /><br/>
                <label className="labels">Age:</label>
                <input className="input-textboxes" type="text" value = {this.props.age} onChange={this.agechange}/><br/>
                <label className="labels">Pwd:</label>
                <input className="input-textboxes" type="text" value = {this.props.pwd} onChange={this.pwdchange}/><br/>
                <label className="labels">Pwd again:</label>
                <input className="input-textboxes" type="text" value = {this.props.pwd}/><br/>
                <button className="buttons" onClick ={this.getUserInfo} >Save User</button>  
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