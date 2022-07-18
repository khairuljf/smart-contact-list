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
                    <label> Search Contact </label>
                    <input type="text" placeholder="Search Contact"  onChange={(e)=>setFilterHandler(e.target.value)} />
                </div>
            </form>
        <div className="ui divided items">{renderContactList}</div>
        </div>
    )
    
}

export default ContactList;