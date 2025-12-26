import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        data-testid="todo-input"
      />

      <button onClick={addTodo} data-testid="add-todo">
        Add Todo
      </button>

      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              data-testid={`delete-${index}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

