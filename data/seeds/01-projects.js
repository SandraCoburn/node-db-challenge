exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      id: 1,
      project_name: "Finish sprint challenge",
      projec_description:
        "Build an API Using Node.js and Express to Manage Projects"
    },
    {
      id: 2,
      project_name: "Be sure to push commits",
      projec_description:
        "Build an API Using Node.js and Express to Manage Projects"
    },
    {
      id: 3,
      project_name: "make a pull request",
      projec_description:
        "Build an API Using Node.js and Express to Manage Projects"
    },
    {
      id: 4,
      project_name: "Fill retro form",
      projec_description:
        "Build an API Using Node.js and Express to Manage Projects"
    }
  ]);
};
