import React, {Component} from 'react';
import UserRow from '.././UserRow';

class UserTable extends Component {
    constructor(props){
        super(props);
    }
    editRowCallBack=()=>{
        this.props.callbackFromRoot_edit();
    }

    render() {
        const filterText = this.props.filterText;
        console.log(this.props.filterText);
        let num = this.props.itemNum;
        let page = this.props.page;
        const rows = [];
        let start = (page - 1) * 5;
        let end = page * 5;
        this.props.users.forEach((user) => {
            if (user.firstname.indexOf(filterText) !== -1 ) {
                rows.push( <UserRow 
                                editRow={this.props.editRowCallBack} 
                                deleteRow ={this.props.deleteRowCallBack} 
                                _id ={user._id} 
                                firstname ={user.firstname}
                                lastname ={user.lastname} 
                                sex = {user.sex} 
                                age={user.age}
                                />
                );
            } 
        });

        return (
            <div class="div-container">
                <table class="table-table">
                    <thead class="table-thead">
                        <tr class="table-tr">
                            <th class="table-th">Edit</th>
                            <th class="table-th">Delete</th>
                            <th class="table-th" onClick ={() =>this.props.fnsort("firstname")} >First Name</th>
                            <th class="table-th" onClick ={()=>this.props.lnsort("lastname")} >Last Name</th>
                            <th class="table-th" onClick ={() =>this.props.sexsort("sex")} >Sex</th>
                            <th class="table-th" onClick ={() => this.props.agesort("age")} >Age</th>
                        </tr>
                    </thead>
                    <tbody>{rows.slice(start, end)}</tbody>
                </table>
            </div>
            
        );
    }
}

export default UserTable;