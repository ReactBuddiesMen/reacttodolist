import React, { Component } from 'react'

const ListItem = (props) => (
    <ul>
        <li>{props.itemname} <button>delete</button></li>        
    </ul>
)


export default ListItem