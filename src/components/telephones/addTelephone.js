import React,{Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';


const validateForm = (errors) => {
    let valid = true;

    //console.log(Object.values(errors));

    Object.values(errors).forEach(          // proagja niz site error stringovi, gleda ako nekoj od niv ne e '' vrakja
                                            // valid = false
        // if we have an error string set valid to false

        (val) => val.length > 0 && (valid = false)


    );
    return valid;
};

class AddTelephone extends Component{

    destinationUser_username = window.location.pathname.split("/")[3].replace("%20"," ");

    constructor(props) {                // state na ovaa komponenta ke sodrzi 2 stvari:
        super(props);                   // 1. telephone = telefonot koj se input-nuva
        this.state = {                  // 2. errors = error poraki koi ke se prikazuvaat do inputot
            telephone: null,
            errors: {
                telephone1: '',
                telephone2: '',
                telephone3: '',
                telephone4: '',
                telephone5: '',
            }
        };
    }

    handleChange = (event) =>{              // vo event e datata so koja se povikuva handleChange. Pristap: event.target.__
        event.preventDefault();             // za da ne se refreshnuva state
        let name = event.target.name;       // imeto na html elementot
        let value = event.target.value;     // vrednosta sto se input-nuva od user
        let errors = this.state.errors;     // errors elementot od state

        if(name === "telephone_of_user"){
            if(value.startsWith("07")===true){
                errors.telephone1 = '';
            }
            else{
                errors.telephone1 = '(1) The mobile telephone number must start with 07';
            }
        }
        if(name === "telephone_of_user_2"){
            if(value.startsWith("07")===true){
                errors.telephone2 = '';
            }
            else{
                errors.telephone2 = '(2) The mobile telephone number must start with 07';
            }
        }
        if(name === "telephone_of_user_3"){
            if(value.startsWith("07")===true){
                errors.telephone3 = '';
            }
            else{
                errors.telephone3 = '(3) The mobile telephone number must start with 07';
            }
        }
        if(name === "telephone_of_user_4"){
            if(value.startsWith("02")===true){
                errors.telephone4 = '';
            }
            else{
                errors.telephone4 = '(4) The home telephone number must start with 02';
            }
        }
        if(name === "telephone_of_user_5"){
            if(value.startsWith("02")===true){
                errors.telephone5 = '';
            }
            else{
                errors.telephone5 = '(5) The home telephone number must start with 02';
            }
        }
                                    //todo: ne sfakjam kako raboti ova
                            // update: ako passnes funk na setState ke mozes da go koristis prethodniot state,
                            // ovaa funkcija se koristi (pretpostavuvam) samo za da console log(errors)
        this.setState({errors, [name]: value}, ()=> {
            console.log(errors);
            this.setState({errors, [name]: value});
        })
    };

    onFormSubmit = (formData) =>{       // TODO: Dovrsi !!!

        formData.preventDefault();

        if(validateForm(this.state.errors)){
            console.log("Valid form");
            const newTelephone = {
                "username": this.destinationUser_username,
                "telephone1": formData.target.telephone_of_user.value,
                "telephone2": formData.target.telephone_of_user_2.value,
                "telephone3": formData.target.telephone_of_user_3.value,
                "telephone4": formData.target.telephone_of_user_4.value,
                "telephone5": formData.target.telephone_of_user_5.value
            };
            this.props.onAddTelephoneToUser(newTelephone);

            this.props.history.push('/users');
        }
        else {
            console.log("Invalid form")
        }

        //props.onAddTelephoneToUser(newTelephone);
    };

    render() {

        const {errors} = this.state;

        return (
            <div>
                <form onSubmit={this.onFormSubmit} noValidate>
                    <br/><br/>
                    <h4>Add telephones to the user {this.destinationUser_username}</h4>
                    <label htmlFor="tel_of_user_id_1">Add mobile phone 1</label>
                    <div>
                        <input type="text" id="tel_of_user_id_1" name={"telephone_of_user"} placeholder="tel" onChange={this.handleChange}/>
                        {errors.telephone1.length>0 &&
                        <span className='error-text alert alert-danger'>{errors.telephone1}</span>}
                    </div>

                    <label htmlFor="tel_of_user_id_2">Add mobile phone 2</label>
                    <div>
                        <input type="text" id="tel_of_user_id_2" name={"telephone_of_user_2"} placeholder="tel" onChange={this.handleChange}/>
                        {errors.telephone2.length>0 &&
                        <span className='error-text alert alert-danger'>{errors.telephone2}</span>}
                    </div>

                    <label htmlFor="tel_of_user_id_3">Add mobile phone 3</label>
                    <div>
                        <input type="text" id="tel_of_user_id_3" name={"telephone_of_user_3"} placeholder="tel" onChange={this.handleChange}/>
                        {errors.telephone3.length>0 &&
                        <span className='error-text alert alert-danger'>{errors.telephone3}</span>}
                    </div>

                    <label htmlFor="tel_of_user_id_4">Add home phone 1</label>
                    <div>
                        <input type="text" id="tel_of_user_id_4" name={"telephone_of_user_4"} placeholder="tel" onChange={this.handleChange}/>
                        {errors.telephone4.length>0 &&
                        <span className='error-text alert alert-danger'>{errors.telephone4}</span>}
                    </div>

                    <label htmlFor="tel_of_user_id_5">Add home phone 2</label>
                    <div>
                        <input type="text" id="tel_of_user_id_5" name={"telephone_of_user_5"} placeholder="tel" onChange={this.handleChange}/>
                        {errors.telephone5.length>0 &&
                        <span className='error-text alert alert-danger'>{errors.telephone5}</span>}
                    </div>




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
};

export default withRouter(AddTelephone);