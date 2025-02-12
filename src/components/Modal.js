import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { saveTasks } from "../utilities/utilities";
import { v4 as uuidv4 } from "uuid";

const ModalComponent = ({ show, onHide, tasks, setTasks }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim()) {
      const newTask = {
        id: uuidv4(),
        title: title,
        completed: false,
      };
      saveTasks(newTask);
      const mergedTasks = [...tasks, newTask];
      setTasks(mergedTasks);
      setTitle("");
      onHide(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Task title</Form.Label>
            <Form.Control
              type="title"
              placeholder="Pick up Stevie from the vet"
              value={title}
              onChange={handleTitleChange}
              autoFocus
              required
            />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
            <Button variant="primary" type="submit" disabled={!title}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
