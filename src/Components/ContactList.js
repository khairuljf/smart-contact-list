import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({contacts, removeContactHandler, setFilterHandler})=>{

    const renderContactList  = contacts.map((contact)=>{
        return    <ContactCard contact={contact} key={contact.id}  removeById={removeContactHandler} />
    })


    return  (
        <div className="card-wrap">
            <form className="ui form">
                <div className="field">
                    <label> Name </label>
                    <input type="text" placeholder="Name"  onChange={(e)=>setFilterHandler(e.target.value)} />
                </div>
            </form>
        <div className="ui divided items">{renderContactList}</div>
        </div>
    )
    
}

export default ContactList;