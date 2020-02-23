const express = require("express");
const server = express();
const ProjectRouter = require("./schemes/projectRouter");
const ResourcesRouter = require("./schemes/resourcesRouter");
const TasksRouter = require("./schemes/tasksRouter");

server.use(express.json());
server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourcesRouter);
server.use("/api/tasks", TasksRouter);

module.exports = server;
