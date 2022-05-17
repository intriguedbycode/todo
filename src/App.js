import React, { Component } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}
