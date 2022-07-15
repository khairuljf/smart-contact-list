import React, {createRoot} from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList  from "./Components/ContactList";


const App = () => {

   const contacts = [
        {
            id:'1',
            name:'Khairul Islam',
            email:'khairuljf@gmail.com',
            mobile:'01758062614',
        },
        {
            id:'2',
            name:'Khairul Islam',
            email:'khairuljf@gmail.com',
            mobile:'01758062614',
        },
        {
            id:'3',
            name:'Khairul Islam',
            email:'khairuljf@gmail.com',
            mobile:'01758062614',
        },
        {
            id:'4',
            name:'Khairul Islam',
            email:'khairuljf@gmail.com',
            mobile:'01758062614',
        }
    ]

    return (
        <div className="ui container">
         <Header />
        <AddContact />
        <ContactList contacts={contacts} />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render( <App />);