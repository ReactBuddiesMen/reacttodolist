import React, { Component } from 'react'
import './App.css';
import HeaderSection from './ReactBuddiesComponents/HeaderSection'
import ListContainer from './ReactBuddiesComponents/ListContainer'


class App extends Component{
  constructor(){
    super()
    this.state = {
        TaskList : [

        ]
    }//state closing
    this.addToList        = this.addToList.bind(this)
    this.clearTxtBoxValue = this.clearTxtBoxValue.bind(this)
    this.removeInArray    = this.removeInArray.bind(this)
}//constructor closing


addToList(){
   const txtValue = document.querySelector('#itemNameTextBox').value
   this.setState(prevState => {
     const updatedTask = prevState.TaskList.map(task => {
        return task
     })
      if(txtValue !== ""){        
        this.clearTxtBoxValue()
        return {TaskList: [...updatedTask, {name: txtValue}]}
      }      
    }
   )

}
clearTxtBoxValue(){
    document.querySelector('#itemNameTextBox').value = ""
}


removeInArray(ename){
 this.setState(prevState => {
    const newTaskList = prevState.TaskList.filter(task => task.name !== ename)// map closing
    console.log(newTaskList)
    return {TaskList: newTaskList}
 })//set state closing
}

  
  render(){
    return (
      <div>
        <HeaderSection >
            <input text="" placeholder="Item name" id="itemNameTextBox" />
            <button onClick = {this.addToList}>Add</button>
        </HeaderSection>
        <ListContainer tasks = {this.state.TaskList} deleteHandler = {this.removeInArray}/>
      </div>
    )
  }
}



export default App;
