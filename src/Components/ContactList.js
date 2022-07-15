import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({contacts})=>{

    const renderContactList  = contacts.map((contact)=>{
        return    <ContactCard contact={contact} key={contact.id} />
    })

    return  <div className="ui cell list">{renderContactList}</div>
    
}

export default ContactList;