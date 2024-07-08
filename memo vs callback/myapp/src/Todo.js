import React from 'react';

const Todo = React.memo(({ todos, addTodo }) => {
  console.log("hi from the todo");

  return (
    <>
      {todos.map((el, index) => (
        <p key={index}>{el}</p>
      ))}
      <button onClick={addTodo}>Add todo</button>
    </>
  );
});

export default Todo;


