import "../styles/styles.css";
import { updateTask } from "../utilities/utilities";
import { useState } from "react";
import { deleteTask } from "../utilities/utilities";

const TodoItem = ({ task, handleTaskCompletion, handleTaskDelete }) => {
  const [checked, setChecked] = useState(task.completed);

  const handleChecked = async () => {
    setChecked((prevChecked) => !prevChecked);
    handleTaskCompletion(task.id, !checked);
    const response = await updateTask(task);
    console.log("response", response.message);
  };

  const handleRemove = async () => {
    console.log("taskid", task.id);
    handleTaskDelete(task.id);
    const message = await deleteTask(task.id);
    console.log("response", message);
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="checkbox-container">
          <input
            className="form-check-input"
            type="checkbox"
            checked={checked}
            onChange={handleChecked}
          />
          <label className={checked ? "completed" : ""}>{task.title}</label>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleRemove}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
