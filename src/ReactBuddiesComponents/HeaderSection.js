import React, { Component } from 'react'
import ReactBuddiesMain from '../ReactBuddiesStyles/ReactBuddiesMain.css'



const HeaderSection = ()=> (
    
    <div className="headerContainer">
        <h2>TO-DO LIST</h2>
        <div className="headerAddFormContainer">
            <input text="" placeholder="Item name" id="itemNameTextBox" />
            <button>Add</button>
        </div>
      
    </div>
)
export default HeaderSection