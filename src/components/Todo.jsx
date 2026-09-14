import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header text-center bg-primary text-white">
          <h3 className="text-white">Todo App</h3>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              value={task}
              onChange={handleChange}
              placeholder="Enter a task"
              className="form-control"
            />
            <button className="btn btn-success" onClick={addTodo}>
              Add
            </button>
          </div>

          <ul className="list-group">
            {todos.length === 0 ? (
              <li className="list-group-item text-center text-muted">
                No tasks yet!
              </li>
            ) : (
              todos.map((todo, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {todo}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
