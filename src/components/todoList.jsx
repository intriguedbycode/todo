import React, { Component, useState } from "react";
import Todo from "./todo";
import TodoForm from "./todoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }

  function completeTodo(id) {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function editTodo(id, newVal) {
    if (!newVal.text || /^\s*$/.test(newVal.text)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? newVal : item)));
  }

  function removeTodo(id) {
    const removeArray = [...todos.filter((todo) => todo.id != id)];

    setTodos(removeArray);
  }

  return (
    <div>
      <h1>Things to do</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={editTodo}
      />
    </div>
  );
}
