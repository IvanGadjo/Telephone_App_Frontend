import React from "react"

const FormSearch = (props) =>{

    const onSearch = (e) =>{
        e.preventDefault();
        props.onSearch(e.target["searchTerm"].value);
    };

    return(
        <form onSubmit={onSearch}>
            <input name={"searchTerm"} type="text" placeholder="Search" aria-label="Search"/>
            <button type="submit">Search</button>
            <button type="cancel" onClick={()=>{
                props.onSearch(" ");
            }}>Reset</button>
        </form>
    );

};

export default FormSearch;