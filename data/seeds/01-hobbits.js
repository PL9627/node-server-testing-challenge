
exports.seed = async function(knex) {
  await knex("hobbits").insert([
		{ name: "sam" },
		{ name: "frodo" },
		{ name: "pippin" },
		{ name: "merry" },
	])
};
