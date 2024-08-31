import { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [inputValue, setValue] = useState("");

  const [task, setTask] = useState([])

  const handleInputChange = (value) => {
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
        return;
    }
    setTask((prev) => [...prev, inputValue])
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
    </section>
  );
};

export default Todo;
