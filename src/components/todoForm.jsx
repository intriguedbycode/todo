import React, { Component, useState, useRef, useEffect } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [id, setId] = useState(1);

  const getId = () => {
    setId(id + 1);
    return id;
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  function handleSubmit(event) {
    event.preventDefault();

    props.onSubmit({
      id: getId(),
      text: input,
    });

    setInput("");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <React.Fragment>
          <input
            type="text"
            placeholder="Update item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </React.Fragment>
      )}
    </form>
  );
}
