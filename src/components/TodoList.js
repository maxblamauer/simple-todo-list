import "../styles/styles.css";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { Button } from "react-bootstrap";
import ModalComponent from "./Modal";
import { getTasks } from "../utilities/utilities";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);
  const handleShow = () => setModalOpen(true);

  useEffect(() => {
    const fetchExistingTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchExistingTasks();
  }, []);

  const handleTaskCompletion = (taskId, isCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: isCompleted } : task
    );

    // Filter out the updated task and move it to the bottom
    const filteredTasks = updatedTasks.filter((task) => task.id !== taskId);
    filteredTasks.push(updatedTasks.find((task) => task.id === taskId));

    setTasks(filteredTasks);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <div className="flex-container">
        <div className="flex-column">
          <Button variant="primary" onClick={handleShow}>
            Add task
          </Button>
        </div>
      </div>

      <ModalComponent
        show={modalOpen}
        onHide={handleClose}
        tasks={tasks}
        setTasks={setTasks}
      />

      {tasks.length > 0 && (
        <div className="background">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              handleTaskCompletion={handleTaskCompletion}
              handleTaskDelete={handleTaskDelete}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ToDoList;
