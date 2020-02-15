import React from 'react'
import {Link} from "react-router-dom";
import FormSearch from "./formSearch";


const header = (props) =>{

    return(
        <div>
            <h2 className={"container-fluid p-3 my-3 bg-dark text-white"}>Welcome to the phonebook app</h2>
            <ul className={"nav nav-tabs"}>
                <li className={"nav-item"}><Link to={"/home"} activeClassName={"nav-link active"}>Home</Link></li>
                <li className={"nav-item"}><Link to={"/users"} activeClassName={"nav-link"}>Users</Link></li>
                <li className={"nav-item"}><Link to={"/telephones"} activeClassName={"nav-link"}>Telephones</Link></li>
                <li>
                    <FormSearch onSearch={props.onSearch}/>
                </li>
            </ul>
        </div>
    )
}

export default header;
