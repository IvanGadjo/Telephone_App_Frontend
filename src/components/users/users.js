import React,{Component} from "react";
import {Link} from "react-router-dom";

// stateful

class Users extends Component{

    onClickDeleteUser(userToDel){
        this.props.onDeleteUser(userToDel.username);
    }


    render(){

        console.log(this.props.listOfUsers)

        return(
            <div>
                <div className={"col"}>


                    <div className={"col"}>
                        <Link to={"/users/add"} className="users_table_btn">
                            <button className="btn btn-primary"><span>Add new user</span></button>
                        </Link>
                    </div>



                    <table id="users-table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Telephones</th>
                            <th>Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                            {this.props.listOfUsers.map((u,userId)=>
                                <tr>
                                    <td>{u.username}</td>
                                    <td>
                                        <ul>
                                            {u.telephones.map((t)=>
                                                <li>'0{t}'</li>
                                            )}
                                        </ul>
                                    </td>
                                    <td>

                                        <button onClick={() => this.onClickDeleteUser(u)}>
                                            Remove
                                        </button>

                                        <Link to={"/telephones/add/"+u.username} className='users_table_btn'>
                                            <button>Add telephone</button>
                                        </Link>

                                        <Link to={"/users/details/"+u.username} className='users_table_btn'>
                                            <button>Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>



                </div>



            </div>
        )
    }

}

export default Users;