import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class UserRow extends Component {
    click =(e)=>{
        return e.target.value;
    }
    render() {
        return (
            <tr class="table-tr">
                <td class="table-td"><button class="buttons row-buttons" onClick ={()=>this.props.editRow(this.props._id)}  ><Link to="/user">Edit</Link></button></td>
                <td class="table-td"><button class="buttons row-buttons" onClick ={()=>this.props.deleteRow(this.props._id)} >Delete</button></td>
                <td class="table-td">{this.props.firstname}</td>
                <td class="table-td">{this.props.lastname}</td>
                <td class="table-td">{this.props.sex}</td>
                <td class="table-td">{this.props.age}</td>
            </tr>
        );
    }
}

export default UserRow;