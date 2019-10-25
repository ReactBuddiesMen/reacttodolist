import React from 'react'

const ListItem = (props) => (
    <ul>
        <li>{props.itemname} <button onClick = { () => props.deleteHandler(props.itemname)}>delete</button></li>        
    </ul>
)


export default ListItem