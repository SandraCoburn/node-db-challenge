const express = require("express");

const Projects = require("./project-model");
const router = express.Router();

router.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get projects" });
    });
});
router.post("/", (req, res) => {
  const newProject = req.body;
  Projects.add(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to add project" });
    });
});

module.exports = router;
