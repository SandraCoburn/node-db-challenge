const express = require("express");

const Tasks = require("./project-model");
const router = express.Router();

router.get("/", (req, res) => {
  Tasks.findTasks(req.query)
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get projects" });
    });
});
//create new tas for a project
router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const newTask = { ...req.body, project_id: id };
  Tasks.addTask(newTask)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to add project" });
    });
});

module.exports = router;
