const express = require("express");
const server = express();
const ProjectRouter = require("./schemes/projectRouter");

server.use(express.json());
server.use("/api/projects", ProjectRouter);

module.exports = server;
