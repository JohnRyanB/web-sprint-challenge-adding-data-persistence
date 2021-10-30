// build your `Task` model here
const db = require(`../../data/dbConfig`);

function getTasks() {
	return db("tasks as t")
		.join("projects as p", "p.project_id", "t.project_id")
		.select("t.*", "p.project_name", "p.project_description");
}

async function createTasks(task) {
	const [task_id] = await db(`tasks`).insert(task);
	return getTasks().where({ task_id }).first();
}

module.exports = { getTasks, createTasks };
