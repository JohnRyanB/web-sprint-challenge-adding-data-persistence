// build your `/api/tasks` router here
const express = require(`express`);
const Resource = require(`./model`);

const router = express.Router();

router.get(`/`, (req, res) => {
	Resource.getTasks()
		.then((tasks) => {
			tasks.forEach((task) => {
				task.task_completed = !!task.task_completed;
			});
			res.status(200).json(tasks);
		})
		.catch((err) => res.status(400).json({ message: err.message }));
});

router.post(`/`, (req, res) => {
	Resource.createTasks(req.body)
		.then((task) => {
			task.task_completed = !!task.task_completed;
			res.status(201).json(task);
		})
		.catch((err) => res.status(400).json({ message: err.message }));
});

module.exports = router;
