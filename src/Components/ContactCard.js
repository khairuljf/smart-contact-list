import React from "react";


const ContactCard = ({contact, removeById}) =>{
   
    const {id, name, email, mobile } = contact

    return(

            <div className="item">
                <div className="ui tiny image">
                    <img className="ui avatar image" src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png" alt ="user" />
                </div>
                <div className="middle aligned content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>

                <div className="phone-action">
                    <div>
                        {mobile} <a href={"tel:" + mobile} ><i className="phone volume icon"></i></a>
                         <a href={"sms:" + mobile} ><i className="envelope outline icon"></i></a>
                     </div>
                </div>

                <button className="ui red  button" onClick={()=>removeById(id)}><i className="trash alternate outline icon" style={{color:"#fff", marginTop:'7px'}}></i></button>

            </div>
    
       )

}

export default ContactCard

