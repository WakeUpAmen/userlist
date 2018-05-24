import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NewUser extends Component{
    constructor(props){
        super(props);
        if(this.props.editFlag === true){
            this.state ={_id: this.props._id, firstname: this.props.firstname, lastname :this.props.lastname, sex:this.props.sex, age:this.props.age};
        }else{
            this.state ={firstname:"", lastname :"",sex:"",age:"", pwd:""};
        } 
    }
    
    getUserInfo = () => {
        if(this.props.editFlag === true){
            let user ={_id:this.state._id,firstname: this.state.firstname, lastname: this.state.lastname, sex: this.state.sex, age: this.state.age, pwd: this.state.pwd}
            this.props.createNewUser(user);
        }else{
            let user ={firstname: this.state.firstname, lastname: this.state.lastname, sex: this.state.sex, age: this.state.age, pwd: this.state.pwd}
            this.props.createNewUser(user);
        }
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
            <div>
                <label>First Name:</label>
                <input type="text" value = {this.state.firstname} onChange={this.fnchange}/><br/>
                <label>Last Name:</label>
                <input type="text" value = {this.state.lastname} onChange={this.lnchange} /><br/>
                <label>Sex:</label>
                <input type="text" value = {this.state.sex} onChange={this.sexchange} /><br/>
                <label>Age:</label>
                <input type="text" value = {this.state.age} onChange={this.agechange}/><br/>
                <label>Pwd:</label>
                <input type="text" value = {this.state.pwd} onChange={this.pwdchange}/><br/>
                <label>Pwd again:</label>
                <input type="text" value = {this.state.pwd}/><br/>
                <button onClick ={this.getUserInfo} ><Link to="/">Add User</Link></button>   
            </div>
        );
    }
  }
export default NewUser;