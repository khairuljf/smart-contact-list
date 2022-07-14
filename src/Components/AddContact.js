import React from "react";


const AddContact = () =>{


    const HaneleName =(e)=>{
        console.log(e.target.value)
    }


    return (
        <div className="add_contact ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
            <div className="field">
                <label> Name </label>
                <input type="text" placeholder="Name" onChange={HaneleName} />
            </div>
            <div className="field">
                <label> Email </label>
                <input type="email" placeholder="Email"/>
            </div>

            <div className="field">
                <label> Mobile </label>
                <input type="number" placeholder="Mobile"/>
            </div>

            <button className="ui button blue">Add</button>

        </form>
    </div>
    )
}

export default AddContact;