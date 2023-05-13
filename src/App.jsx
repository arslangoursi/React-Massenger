import React from "react";
import { Edit, Trash } from "react-feather";
import "./index.css";

export default function App() {
  return (
    <div className="main__container">
      <div className="center__container">
        <div className="input__container__heading">Get things done!</div>
        <div className="input__container">
          <input type="text" placeholder="Write task here..." />
          <button className="task__btn">Add task</button>
        </div>
        <div className="content__container">
          <div className="task__entry">
            <div className="task__entry__text">Task one here</div>
            <div className="task__entry__edit">
              <Edit />
            </div>
            <div className="task__entry__delete">
              <Trash />
            </div>
          </div>
          <div className="task__entry">
            <div className="task__entry__text">Task one here</div>
            <div className="task__entry__edit">
              <Edit />
            </div>
            <div className="task__entry__delete">
              <Trash />
            </div>
          </div>
          <div className="task__entry">
            <div className="task__entry__text">Task one here</div>
            <div className="task__entry__edit">
              <Edit />
            </div>
            <div className="task__entry__delete">
              <Trash />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
