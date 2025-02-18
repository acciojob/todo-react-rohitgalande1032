import React, { useState } from 'react'

const Todo = ({todos, setTodos}) => {
    const [task, setTask] = useState('');

    const handleOnChange = (e)=> {
        setTask(e.target.value);
      }
    
      const handleClick = () => {
        setTodos([...todos, {
            id: Math.floor(Math.random() * 100),
            text: task
        }]);
        setTask('');
      }

      const handleDelete = (id) => {
        let filterTodo = todos.filter((item) => item.id !== id);
        setTodos(filterTodo);
      }
  return (
    <div style={{textAlign:'center'}}>
          <span>
          <input type="text"  value={task} onChange={handleOnChange} placeholder="Enter task"/>
          <button onClick={handleClick}>Add Todo</button>
          </span>

          <div>
            {todos.length > 0 && todos.map((todo, index)=> (
              <div key={index} style={{display: 'flex', justifyContent:'space-around', alignItems: 'center'}}>
                <p>{todo.text}</p>
                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Todo