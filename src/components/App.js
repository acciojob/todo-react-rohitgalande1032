
import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";
const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
        <h1 style={{textAlign:'center'}}>To-Do List</h1>
        <Todo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
