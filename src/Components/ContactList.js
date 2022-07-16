import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({contacts, removeContactHandler})=>{

    console.log(removeContactHandler)

    const renderContactList  = contacts.map((contact)=>{
        console.log(contact)
        return    <ContactCard contact={contact} key={contact.id}  removeContactHandler={removeContactHandler} />
    })

    return  <div className="ui divided items">{renderContactList}</div>
    
}

export default ContactList;