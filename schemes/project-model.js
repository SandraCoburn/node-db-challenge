const db = require("../data/db-config");
const mappers = require("./mappers");

module.exports = {
  find,
  findById,
  add,
  addResources,
  findResources,
  findResourcebyId,
  addTask,
  findTasks,
  findTaskById,
  getProjectTasks
};

function find() {
  return db("projects");
}
// function find(id) {
//   let query = db("projects as p");
//   if (id) {
//     query.where("p.id", id).first();
//     const promises = [query, getProjectTasks(id)];
//     return Promise.all(promises).then(function(results) {
//       let [project, tasks] = results;
//       if (project) {
//         project.tasks = tasks;
//         return mappers.projectToBody(project);
//       } else {
//         return null;
//       }
//     });
//   } else {
//     return query.then(projects => {
//       return projects.map(project => mappers.projectToBody(projects));
//     });
//   }
// }

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
async function addResources(resource) {
  const [id] = await db("resources").insert(resource);
  return findResourcebyId(id);
}
function findResourcebyId(id) {
  if (id) {
    return db("resources")
      .where({ id })
      .first();
  } else {
    return null;
  }
}
function findTaskById(id) {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "t.id")
    .select("t.id", "p.project_name", "p.projec_description")
    .where("p.id", id);
}
function findResources() {
  return db("resources");
}

async function addTask(task) {
  const [id] = await db("tasks").insert(task);
  return findTaskById(id);
}

function getProjectTasks(projectId) {
  return db("tasks")
    .where("project_id", projectId)
    .then(tasks => tasks.map(task => mappers.taskToBody(task)));
}
function findTasks(id) {
  return db("tasks");

  // if (id) {
  //   return query
  //     .where("id", id)
  //     .first()
  //     .then(task => {
  //       if (task) {
  //         return mappers.taskToBody(task);
  //       } else {
  //         return null;
  //       }
  //     });
  // } else {
  //   return query.then(tasks => {
  //     return tasks.map(task => mappers.taskToBody(task));
  //   });
  // }
}
