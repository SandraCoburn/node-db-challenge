const db = require("../data/db-config");
const mappers = require("./mappers");

module.exports = {
  find,
  findById,
  add,
  addResources,
  findResources,
  addTask,
  findTasks
};

function find() {
  return db("projects");
}

function findById(id) {
  if (id) {
    return db("projects")
      .where({ id })
      .first();
  } else {
    return null;
  }
}
async function add(project) {
  const [id] = await db("projects").insert(project);
  return findById(id);
}
function addResources(resource, project_id) {
  return db("resources")
    .insert(resource)
    .where(project_id, id);
}
function findResources() {
  return db("resources");
}
function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => findById(id));
  // .where(project_id, id);
}
function findTasks(id) {
  let query = db("tasks");
  if (id) {
    return query
      .where("id", id)
      .first()
      .then(task => {
        if (task) {
          return mappers.taskToBody(task);
        } else {
          return null;
        }
      });
  } else {
    return query.then(tasks => {
      return tasks.map(task => mappers.taskToBody(task));
    });
  }
  //   return db("tasks as t")
  // .join("projects as p", "t.project_id", "t.id")
  // .select("t.id", "p.name", "p.description")
  // .where("p.id", id);
}
