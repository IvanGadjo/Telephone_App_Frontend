import React from 'react';
import Logo from '../logo.PNG'


const home = (props) => {

    return(
        <div>
            <img id={"logo"} src={Logo} alt={"Phonebook app"} className={"mx-auto d-block"}/>
        </div>
    )

}

export default home;