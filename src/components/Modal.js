import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalComponent = ({ show, onHide, tasks, setTasks }) => {
  // State to manage form inputs
  const [title, setTitle] = useState(""); // For email input

  // Handle email input change
  const handleTitleChange = (e) => setTitle(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // If there's a title, add the new task
    if (title.trim()) {
      // Create a new task object
      const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false,
      };

      // Add the new task to the list of tasks
      setTasks((prevTasks) => [...prevTasks, newTask]);

      // Reset title input field
      setTitle("");

      // Close the modal
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
