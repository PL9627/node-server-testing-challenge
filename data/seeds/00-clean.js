exports.seed = async function (knex) {
  await knex("hobbits").truncate();
};
