import React, { Component } from 'react'
import ListItem from './ListItem'



class ListContainer extends Component{
    constructor(){
        super()
        this.state = {
            itemname : ['first Item', 'Second Item', 'Third Item', 'Fourth Item', 'hehehez']
        }//state closing
    }//constructor closing


    render(){
        return(
            <div>
                {this.state.itemname.map(name => (
                     <ListItem itemname = {name}/>
                ))}
               
            </div>
        )//return closing
    }//redner closing
}



export default ListContainer