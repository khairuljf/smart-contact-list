import React from "react";
import { useLocation } from "react-router-dom";
const ContactDetails = (props) =>{
   
    const location = useLocation();

    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img className="ui avatar image" src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png" alt ="user" />
                </div>
                <div className="content">
                    <div className="header"> {location.state.name} </div>
                    <div className="description">{location.state.email}</div>
                    <div className="description">{location.state.mobile}</div>
                </div>
            </div>
        </div>
    
       )

}

export default ContactDetails

