import React from "react";

const UserTodos = ({ todos }) => {
  return (
    <div>
      <h3>Todos:</h3>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
};

export default UserTodos;
