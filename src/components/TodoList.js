import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  console.log(props.todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <Todo text={todo.text} />
        ))}
      </ul>
    </div>
  );
}
