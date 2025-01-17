import "../styles/styles.css";
import { useState } from "react";
import TodoItem from "./TodoItem";
import { Button } from "react-bootstrap";
import ModalComponent from "./Modal";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);
  const handleShow = () => setModalOpen(true);

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

      <div className="background">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task.title} />
        ))}
      </div>
    </>
  );
};

export default ToDoList;
