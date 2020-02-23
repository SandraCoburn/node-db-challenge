exports.seed = function(knex) {
  return knex("resources").insert([
    { id: 1, resource_name: "computer", resource_description: "to work" },
    { id: 2, resource_name: "monitor", resource_description: "to work" },
    { id: 3, resource_name: "printer", resource_description: "to print" }
  ]);
};
