import React, {Component} from 'react';
import UserRow from './UserRow';

class UserTable extends Component {
    constructor(props){
        super(props);
    }
    editRowCallBack=()=>{
        this.props.callbackFromRoot_edit();
    }

    render() {
        const filterText = this.props.filterText;
        let num = this.props.itemNum;
        let page = this.props.page;
        const rows = [];
        let start = (page - 1) * 5;
        let end = page * 5;
        console.log("table users")
        console.log(this.props.users)
        this.props.users.forEach((user) => {
            if (user.firstname.indexOf(filterText) !== -1 ) {
                rows.push( <UserRow 
                                editRow={this.props.editRowCallBack} 
                                deleteRow ={this.props.deleteOneUser} 
                                _id ={user._id} 
                                firstname ={user.firstname}
                                lastname ={user.lastname} 
                                sex = {user.sex} age={user.age}/>
                );
            } 
        });

        return (
            <div className="div-container">
            <table className="table-table">
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th onClick ={() =>this.props.fnsort("firstname")} >First Name</th>
                        <th onClick ={()=>this.props.lnsort("lastname")} >Last Name</th>
                        <th onClick ={() =>this.props.sexsort("sex")} >Sex</th>
                        <th onClick ={() => this.props.agesort("age")} >Age</th>
                    </tr>
                </thead>
                <tbody>{rows.slice(start, end)}</tbody>
            </table>
            </div>
        );
    }
}

export default UserTable;