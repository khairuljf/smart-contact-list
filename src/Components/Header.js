import React from "react";

import {Link} from 'react-router-dom'

const Header = ()=>{
    return (

<div className="ui inverted segment">
  <div className="ui inverted secondary menu">
        <Link to="/" className="item"><h2>Dashboard</h2></Link>

        <Link to="add" className="item">Add</Link>
        
        <div className="right menu">
            <div className="item">

            <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
            </div>
   
            </div>
            <a className="ui item">
            Logout
            </a>
        </div>
        </div>
        </div>


    )


        

     
}

export default Header