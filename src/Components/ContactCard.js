import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactCard = ({contact, removeById}) =>{
   
    const {id, name, email, mobile } = contact
    const navigate = useNavigate();

    const toComponentContactDetails=()=>{
        navigate(`/contact/${id}`,{state:{name, email, mobile  }});
          }
        

    return(

            <div className="item">
                <div className="ui tiny image">
                    <img className="ui avatar image" src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png" alt ="user" />
                </div>
                <div className="middle aligned content">
                    <a  onClick={()=>{toComponentContactDetails()}}>
                        {name}
                    </a>
                    <div><a href={"mailto:" + email}>{email}</a></div>
                </div>

                <div className="phone-action">
                    <div>
                         <a href={"tel:" + mobile} >{mobile}<i className="phone volume icon"></i></a>
                         <a href={"sms:" + mobile} ><i className="envelope outline icon"></i></a>
                     </div>
                </div>

                <button className="ui red  button" onClick={()=>removeById(id)}><i className="trash alternate outline icon" style={{color:"#fff", marginTop:'7px'}}></i></button>

            </div>
    
       )

}

export default ContactCard

