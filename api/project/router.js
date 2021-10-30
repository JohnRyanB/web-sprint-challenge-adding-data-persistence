// build your `/api/projects` router here
const express = require(`express`);
const Project = require(`./model`);

const router = express.Router();

router.get(`/`, (req, res) => {
	Project.getProjects()
		.then((projects) => {
			projects.forEach((proj) => {
				proj.project_completed = !!proj.project_completed;
			});
			res.status(200).json(projects);
		})
		.catch((err) => res.status(400).json({ message: err.message }));
});

router.post(`/`, (req, res) => {
	Project.createProject(req.body)
		.then((project) => {
			project.project_completed = !!project.project_completed;
			res.status(201).json(project);
		})
		.catch((err) => res.status(400).json({ message: err.message }));
});

module.exports = router;
