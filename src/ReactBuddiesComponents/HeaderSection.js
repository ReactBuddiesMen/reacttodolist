import React  from 'react'
import ReactBuddiesMain from '../ReactBuddiesStyles/ReactBuddiesMain.css'





const HeaderSection = (props) => (
    <div className="headerContainer">
        <h2>TO-DO LIST</h2>
        <div className="headerAddFormContainer">
            {props.children}
        </div>      
    </div>
)

export default HeaderSection