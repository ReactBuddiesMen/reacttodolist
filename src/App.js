import React from 'react';
import './App.css';


function TodoList(){
  return(
    <div className="App">
      <ul>
        <li>Wordpress Training</li>
        <li>Sass Training</li>
        <li>Laravel training</li>
      </ul>
    </div>
  )
}
function App() {
  return (
   <TodoList/>
  );
}

export default App;
