exports.seed = function(knex) {
  // Inserts seed entries
  return knex("tasks").insert([
    {
      id: 1,
      task_description: "Hurry finish",
      task_completed: true,
      project_id: 1
    },
    {
      id: 2,
      task_description: "Hurry finish",
      task_completed: true,
      project_id: 1
    },
    {
      id: 3,
      task_description: "Hurry finish",
      task_completed: false,
      project_id: 1
    },
    {
      id: 4,
      task_description: "Hurry finish",
      task_completed: true,
      project_id: 2
    },
    {
      id: 5,
      task_description: "Hurry finish",
      task_completed: true,
      project_id: 2
    },
    {
      id: 6,
      task_description: "Hurry finish",
      task_completed: false,
      project_id: 2
    }
  ]);
};
