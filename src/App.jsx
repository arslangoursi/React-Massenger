import { useState, useEffect } from "react";
import { Edit, Trash, Check } from "react-feather";
import "./index.css";

export default function App() {
  //-------------------------------------------------------------------------------------------useStates

  const [value, setValue] = useState();
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("list")) || [
      {
        id: "1",
        value: "Hi, how are you",
        complete: false,
        date: new Date(),
      },
      {
        id: "2",
        value: "I am Arslan",
        complete: false,
        date: new Date(),
      },
    ]
  );
  const [empty, setEmpty] = useState(false);
  const [unique, setUnique] = useState(false);

  //--------------------------------------------------------------------------------------------useEffect

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  //----------------------------------------------------------------------------------------------handleInput

  function handleChange(e) {
    setValue(e.target.value);
  }

  //----------------------------------------------------------------------------------------------taskAdd

  function addTask() {
    if (value === "") {
      setEmpty(true);
    } else if (todos.find((item) => item.value === value)) {
      setUnique(true);
    } else {
      const task = {
        id: value.toString(),
        value: value,
        complete: false,
        date: new Date(),
      };
      setTodos([task].concat(todos));
      setValue("");
      console.log("add task");
      setEmpty(false);
      setUnique(false);
    }
  }

  //----------------------------------------------------------------------------------------------taskEdit

  function editTask(id) {
    const edt = todos.find((item) => item.id === id);
    setValue(edt.value);
    deleteTask(id);
  }

  //----------------------------------------------------------------------------------------------taskDelete

  function deleteTask(id) {
    const del = todos.filter((item) => item.id !== id);
    setTodos(del);
  }

  //----------------------------------------------------------------------------------------------taskComplete

  function completeTask(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  }

  //-----------------------------------------------------------------------------------------------------------

  return (
    <div className="main__container">
      <div className="center__container">
        <div className="input__container__heading">Get things done!</div>
        <div className="input__complete">
          <div className="input__container">
            <input
              type="text"
              placeholder="Write task here..."
              name="name"
              defaultValue={value}
              onChange={handleChange}
            />
            <button className="task__btn" onClick={addTask}>
              Add task
            </button>
          </div>
          <div className="input__info">
            {empty && (
              <div className="input__info__empty">Please Enter Value</div>
            )}
            {unique && (
              <div className="input__info__unique">
                Please Enter Unique Value
              </div>
            )}
          </div>
        </div>
        <div className="content__container">
          {todos.map((todo, index) => {
            return (
              <div className="task__entry" key={index}>
                <div
                  className={
                    todo.complete
                      ? "task__entry__text__complete"
                      : "task__entry__text"
                  }
                >
                  {todo.value}
                </div>

                <div
                  className="task__entry__complete"
                  onClick={() => completeTask(todo.id)}
                >
                  <Check />
                </div>
                <div
                  className="task__entry__edit"
                  onClick={() => editTask(todo.id)}
                >
                  <Edit />
                </div>
                <div
                  className="task__entry__delete"
                  onClick={() => deleteTask(todo.id)}
                >
                  <Trash />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
