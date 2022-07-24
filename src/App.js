import React, {createRoot, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList  from "./Components/ContactList";
import uuid from "react-uuid";
import ContactDetails from "./Components/ContactDetail";
import { BrowserRouter,  Routes,Route, } from "react-router-dom";
import axios from "axios";

const App = () => {

    const Local_storage_key = "contacts"

    const [contacts, setContacts] = useState([])
    const [filter, setFilter] = useState('')


    // Make a request for a user with a given ID

    


    let filterContact = contacts.filter((contact)=>{
            return contact.name.toLowerCase().indexOf(filter.toLowerCase()) >=0;
    })

    const addContactHandler = (contact)=>{
        
        const request = {
            id:uuid(),
            ...contact
        }

        const response = axios.post("http://localhost:3000/contacts", request)
        .then(response => setContacts([...contacts, response.data]));

        //setContacts([...contacts, {id:uuid(), ...contact}])
    }

    const removeContactHandler = (id) =>{

        axios.delete(`http://localhost:3000/contacts/${id}`)


        const newContact = contacts.filter((contact)=>{
            return contact.id !== id
        })
        setContacts(newContact)
    }

    const setFilterHandler = (data)=>{
        setFilter(data)
    }

    useEffect(()=>{
      

     // const getContacts =   JSON.parse(localStorage.getItem(Local_storage_key))
     //   if(getContacts){
    //     setContacts(getContacts)
    //   }
      
    axios .get("http://localhost:3000/contacts")
    .then(response => setContacts(response.data));
   
    
    
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
                    <Route path="contact/:id" element={<ContactDetails  />} />
                    <Route  path="*" element={  <main style={{ padding: "1rem" }}>  <p>There's nothing here!</p>  </main>   } />
                </Routes>
                
            </BrowserRouter>
       
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render( <App />);