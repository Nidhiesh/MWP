const express = require("express");

const app = express();

app.use(express.json());

let tasks = [];

// Create task
app.post("/tasks", (req, res) => {
    let task = {
        id: Date.now(),
        title: req.body.title
    };

    tasks.push(task);
    res.json(task);
});

// Read all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Read one task
app.get("/tasks/:id", (req, res) => {
    let task = tasks.find(t => t.id == req.params.id);

    if (!task) return res.status(404).send("Task not found");

    res.json(task);
});

// Update task
app.put("/tasks/:id", (req, res) => {
    let task = tasks.find(t => t.id == req.params.id);

    if (!task) return res.status(404).send("Task not found");

    task.title = req.body.title;
    res.json(task);
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);

    res.send("Task deleted successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});