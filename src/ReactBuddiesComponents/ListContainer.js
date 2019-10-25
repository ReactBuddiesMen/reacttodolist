import React, { Component } from 'react'
import ListItem from './ListItem'



class ListContainer extends Component{

    render(){        
        console.log(this.props.tasks)
        return(
           
            <div>
                  {this.props.tasks.map((task, i ) => (
                     <ListItem itemname = {task.name} key={i} deleteHandler = {this.props.deleteHandler}/>
                ))}                                
            </div>
        )//return closing
    }//redner closing
}



export default ListContainer