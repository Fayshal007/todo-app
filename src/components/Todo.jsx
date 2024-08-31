import { useState } from "react";
import "./Todo.css";
import { MdDeleteForever, MdCheck } from "react-icons/md";


const Todo = () => {
  const [inputValue, setValue] = useState("");

  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }

    if (task.includes(inputValue)) {
      setValue("");

      return;
    }

    setTask((prev) => [...prev, inputValue]);

    setValue("");
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Tode List</h1>
      </header>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUOrdList">
      <ul>
        {
          task.map((item, index) =>{
            return(
              <li key={index} className="todo-item">
                <span>{item}</span>
                <button className="check-btn"><MdCheck/></button>
                <button className="delete-btn"><MdDeleteForever /></button>
              </li>
            )
          })
        }
      </ul>
      </section>
    </section>
  );
};

export default Todo;
