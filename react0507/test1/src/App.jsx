import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div>
      <h1>Todo App</h1>
      
      <input type="text" placeholder="Add Todo" onKeyUp={(e) => {
        if (<button onClick={handleClick}>Add Todo</button>) {
          handleAddTodo(e.target.value);
          e.target.value = '';
          <button onClick={handleClick}>Add Todo</button>
        }
      }} />
    <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
  );
}

export default App;