const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

// Mock Database
const tasks = [
  {
    id: uuidv4(),
    title: "Take Stevie to the vet",
    completed: false,
  },
];

app.use(express.json());

app.get("/getTasks", (req, res) => {
  res.status(200).json({
    success: true,
    data: tasks,
  });
});

app.post("/save", (req, res) => {
  const { id, title, completed } = req.body;
  console.log("start");
  console.log(id);
  console.log(title);
  console.log(completed);
  if (!id && !title && !completed) {
    res.status(404).json({
      success: true,
      message: "task was not found",
    });
  } else {
    const newTask = {
      id: id,
      title: title,
      completed: completed,
    };

    tasks.push(newTask);

    res.status(200).json({
      success: true,
      message: "task successfully saved",
    });
  }
});

app.post("/update", (req, res) => {
  const { id } = req.body;
  console.log(req);
  const taskIndex = tasks.findIndex((task) => task.id === id);
  console.log(taskIndex);
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    console.log(tasks);
    res.status(200).json({
      success: true,
      message: "Task updated successfully",
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }
});

app.delete("/delete", (req, res) => {
  const { id } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  res.status(200).json({
    success: true,
    message: "Task successfully deleted",
    data: deletedTask[0],
  });
});

app.get("/getSingleTask", (req, res) => {
  const { task } = req.query;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
