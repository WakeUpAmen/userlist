import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class UserRow extends Component {
    click =(e)=>{
        return e.target.value;
    }
    render() {
        return (
            <tr>
                <td><button onClick ={()=>this.props.editRow(this.props._id)}  ><Link to="/user">Edit</Link></button></td>
                <td><button onClick ={()=>this.props.deleteRow(this.props._id)} >Delete</button></td>
                <td>{this.props.firstname}</td>
                <td>{this.props.lastname}</td>
                <td>{this.props.sex}</td>
                <td>{this.props.age}</td>
            </tr>
        );
    }
}

export default UserRow;