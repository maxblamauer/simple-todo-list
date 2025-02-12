export const saveTasks = async (newTask) => {
  try {
    const response = await fetch("http://localhost:3000/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to get tasks");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const updateTask = async (task) => {
  try {
    const response = await fetch("http://localhost:3000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to update task");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getTasks = async () => {
  try {
    const url = "http://localhost:3000/getTasks";

    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to get tasks");
    }
    const tasks = await response.json();
    return tasks.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = async (task) => {
  try {
    const response = await fetch("http://localhost:3000/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: task }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to delete task");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSingleTask = async (task) => {
  try {
    const response = await fetch(
      `http://localhost:3000/getSingleTask?=${task}`
    );

    if (!response.ok) {
      throw new Error("Failed to get any tasks.");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAll = async (task) => {
  try {
    const response = await fetch("http://localhost:3000/getSingleTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to delete");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};
