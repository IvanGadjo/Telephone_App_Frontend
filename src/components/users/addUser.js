import React,{Component} from "react";
import {withRouter} from 'react-router-dom';        // todo: so ova mozes redirect pri save (go koristis pri export default)
import {Link} from "react-router-dom";

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
};

class addUser extends Component {



    constructor(props) {
        super(props);
        this.state = {
            username: null,
            errors: {
                username: '',
            }
        };
    }

    handleChange = (event) =>{
        //debugger;

        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        let errors = this.state.errors;

        switch (name) {
            case 'name_of_user':
                errors.username = value.length < 5 ?
                    'Full name must be 5 chars' :
                    '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value}, ()=> {
            console.log(errors);
            this.setState({errors, [name]: value});
        })
    };


    onFormSubmit = (formData) =>{

        formData.preventDefault();

        if(validateForm(this.state.errors)){
            console.log("Valid form");
            const newUser = {
                "username": formData.target.name_of_user.value,
                "telephones": []
                // "telephones": [formData.target.telephone_of_user.value]
            };

            this.props.onCreateNewUser(newUser);

            this.props.history.push('/users');
            //this.props.router.push('/users');
        }
        else{
            console.log("Invalid form")
        }

        // const newUser = {
        //     "username": formData.target.name_of_user.value,
        //     "telephones": []
        //     // "telephones": [formData.target.telephone_of_user.value]
        // };
        //
        // this.props.onCreateNewUser(newUser);
    };


    render() {
        const {errors} = this.state;
        return (
            <div>
                <form onSubmit={this.onFormSubmit} noValidate>
                    <br/><br/>
                    <h4>Add user</h4>
                    <label htmlFor="name_of_user_id">Input username:</label>
                    <div>
                        <input type="text" name={"name_of_user"} id="name_of_user_id" placeholder="username" onChange={this.handleChange}/>
                        {errors.username.length>0 &&
                        <span className='error-text alert alert-danger'>{errors.username}</span>}
                    </div>
                    {/*<label htmlFor="tel_of_user_id">Add telephone</label>*/}
                    {/*<div>*/}
                    {/*    <input type="text" id="tel_of_user_id" name={"telephone_of_user"} placeholder="tel"/>*/}
                    {/*</div>*/}

                    <div>
                        <button type="submit">Save</button>
                        <Link to={"/users"}>
                            <button>Cancel</button>
                        </Link>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(addUser);