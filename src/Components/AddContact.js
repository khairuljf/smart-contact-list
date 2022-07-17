import React, {useState} from "react";
import uuid from "react-uuid";

const AddContact = ({addContactHandler}) =>{


    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setmobile] = useState('')
 
  
    const addContact =(e)=>{
        e.preventDefault();
        addContactHandler({ name:Name, email:email, mobile:mobile})
        setName('')
        setEmail('')
        setmobile('')
    }


    return (
        <div className="add_contact ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={addContact}>
                <div className="field">
                    <label> Name </label>
                    <input type="text" placeholder="Name" value={Name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="field">
                    <label> Email </label>
                    <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label> Mobile </label>
                    <input type="number" placeholder="Mobile" value={mobile} onChange={(e)=>setmobile(e.target.value)} />
                </div>

                <button className="ui button blue">Add</button>

            </form>
        </div>
    )
}

export default AddContact;