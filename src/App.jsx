import React from "react";
import { useState } from "react";
// import "./index.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValues] = useState("");
  function handleSubmit() {
    setTodos([...todos, value]);
    setValues("");
    console.log(value);
  }
  return (
    <>
      <div className="main__container">
        <div className="center__container">
          <input
            type="text"
            onChange={(e) => {
              setValues(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>Add task</button>
          {todos.map((todo) => {
            return <li>{todo}</li>;
          })}
        </div>
      </div>
    </>
  );
}
