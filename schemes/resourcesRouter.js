const express = require("express");

const Resources = require("./project-model");
const router = express.Router();

router.get("/", (req, res) => {
  Resources.findResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get resources" });
    });
});
router.post("/", (req, res) => {
  const newResource = req.body;
  Resources.addResources(newResource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to add resources" });
    });
});

module.exports = router;
