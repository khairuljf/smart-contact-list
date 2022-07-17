import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({contacts, removeContactHandler})=>{

    const renderContactList  = contacts.map((contact)=>{
        return    <ContactCard contact={contact} key={contact.id}  removeById={removeContactHandler} />
    })

    return  <div className="ui divided items">{renderContactList}</div>
    
}

export default ContactList;