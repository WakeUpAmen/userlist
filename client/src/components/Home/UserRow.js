import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class UserRow extends Component {
    render() {
        return (
            <tr>
                <td><button className="buttons"><Link to={{ pathname: `/edituser/${this.props._id}` }}>Edit</Link></button></td>
                <td><button className="buttons"  onClick ={()=>this.props.deleteRow(this.props._id)} >Delete</button></td>
                <td>{this.props.firstname}</td>
                <td>{this.props.lastname}</td>
                <td>{this.props.sex}</td>
                <td>{this.props.age}</td>
            </tr>
        );
    }
}

export default UserRow;