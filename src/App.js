import React, {createRoot, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList  from "./Components/ContactList";


const App = () => {

    const Local_storage_key = "contacts"

    const [contacts, setContacts] = useState([])

    const addContactHandler = (contact)=>{
        setContacts([...contacts, contact])
    }

    useEffect(()=>{
      const getContacts =   JSON.parse(localStorage.getItem(Local_storage_key))
    
      setContacts(getContacts)
        
    },[])


    useEffect(()=>{
        localStorage.setItem(Local_storage_key, JSON.stringify(contacts))
    },[contacts])



    return (
        <div className="ui container">
         <Header />
        <AddContact  addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render( <App />);