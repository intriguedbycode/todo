import React, { Component, useState } from "react";
import TodoForm from "./todoForm";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  function submitEdit(val) {
    updateTodo(edit.id, val);
    setEdit({
      id: null,
      value: "",
    });
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <FaUserEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon expose-edit"
        />
        <h6
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="hide-edit"
        >
          edit
        </h6>
        <AiFillCloseSquare
          onClick={() => removeTodo(todo.id)}
          className="delete-icon expose-delete"
        />
        <h6 onClick={() => removeTodo(todo.id)} className="hide-delete">
          delete
        </h6>
      </div>
    </div>
  ));
}
