import React, {createRoot, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList  from "./Components/ContactList";
import uuid from "react-uuid";
import { BrowserRouter,  Routes,Route, } from "react-router-dom";


const App = () => {

    const Local_storage_key = "contacts"

    const [contacts, setContacts] = useState([])
    const [filter, setFilter] = useState('')

    let filterContact = contacts.filter((contact)=>{
            return contact.name.toLowerCase().indexOf(filter.toLowerCase()) >=0;
    })

    const addContactHandler = (contact)=>{
        setContacts([...contacts, {id:uuid(), ...contact}])
    }

    const removeContactHandler = (id) =>{
        const newContact = contacts.filter((contact)=>{
            return contact.id !== id
        })
        setContacts(newContact)
    }

    const setFilterHandler = (data)=>{
        setFilter(data)
    }

    useEffect(()=>{
      const getContacts =   JSON.parse(localStorage.getItem(Local_storage_key))
    
      if(getContacts){
        setContacts(getContacts)
      }
      
    },[])


    useEffect(()=>{
        localStorage.setItem(Local_storage_key, JSON.stringify(contacts))
    },[contacts])



    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<ContactList contacts={filterContact} removeContactHandler={removeContactHandler} setFilterHandler={setFilterHandler} />} />
                    <Route path="add" element={<AddContact  addContactHandler={addContactHandler}/>} />
                    <Route  path="*" element={  <main style={{ padding: "1rem" }}>  <p>There's nothing here!</p>  </main>   } />
                </Routes>
                
            </BrowserRouter>
       
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render( <App />);