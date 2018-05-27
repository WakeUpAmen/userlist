import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import * as actions from '../../actions';
import {connect} from 'react-redux';

class NewUser extends Component{
    constructor(props){
        super(props);
        this.state ={firstname:"", lastname :"",sex:"",age:"", pwd:""};     
    } 
    getUserInfo = () => {
        let user ={firstname: this.state.firstname, lastname: this.state.lastname, sex: this.state.sex, age: this.state.age, pwd: this.state.pwd}
        this.props.addOneToServer("http://localhost:8888/api/userlist/", user);    
    }
    fnchange=(e)=>{
        this.setState({firstname: e.target.value});
    }
    lnchange=(e)=>{
        this.setState({lastname: e.target.value});
    }
    sexchange=(e)=>{
        this.setState({sex: e.target.value});
    }
    agechange=(e)=>{
        this.setState({age: e.target.value});
    }
    pwdchange=(e)=>{
        this.setState({pwd: e.target.value});
    }
    render (){
        return(
            <div className="div-container">
                <label className="labels">First Name:</label>
                <input className="input-textboxes" type="text" value = {this.state.firstname} onChange={this.fnchange}/><br/>
                <label className="labels">Last Name:</label>
                <input className="input-textboxes" type="text" value = {this.state.lastname} onChange={this.lnchange} /><br/>
                <label className="labels">Sex:</label>
                <input className="input-textboxes" type="text" value = {this.state.sex} onChange={this.sexchange} /><br/>
                <label className="labels">Age:</label>
                <input className="input-textboxes" type="text" value = {this.state.age} onChange={this.agechange}/><br/>
                <label className="labels">Pwd:</label>
                <input className="input-textboxes" type="text" value = {this.state.pwd} onChange={this.pwdchange}/><br/>
                <label className="labels">Pwd again:</label>
                <input className="input-textboxes" type="text" value = {this.state.pwd}/><br/>
                <button className="buttons" onClick ={this.getUserInfo} >Add User</button>  
                {this.props.newUserCompleted && <Redirect to={{pathname: '/'}}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        hasError: state.myUserListR.hasError,
        newUserCompleted: state.myUserListR.newUserCompleted,
    }
};

function mapDispatchToProps(dispatch) {
    return({
        addOneToServer:(url, userdata) =>{ dispatch(actions.addOneToServer(url, userdata))},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);