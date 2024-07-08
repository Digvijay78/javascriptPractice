import React, { useState, useCallback } from "react";
import Todo from "./Todo";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addCount = () => {
    console.log("hi from the count function");
    setCount(prevCount => prevCount + 1);
  };

  const addTodo = useCallback(() => {
    console.log("hi from the todo function");
    setTodos(prevTodos => [...prevTodos, `Thing ${prevTodos.length + 1}`]);
  }, [setTodos]);

  return (
    <div>
      <Todo todos={todos} addTodo={addTodo} />
      <div className="container">
        <p>count: {count}</p>
        <button onClick={addCount}>Add Count</button>
      </div>
    </div>
  );
}

export default App;
