const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());            // allow frontend to access backend
app.use(express.json());    // parse JSON body

// temporary in-memory storage
let todos = [];

/* -------------------- ROUTES -------------------- */

// Home route
app.get("/", (req, res) => {
  res.send("To-Do App Backend Running");
});

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Add a todo
app.post("/todos", (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }

  const newTodo = {
    id: Date.now(),
    task: task
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  todos = todos.filter(todo => todo.id !== id);

  res.json({ message: "Todo deleted successfully" });
});

/* -------------------- SERVER -------------------- */

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
