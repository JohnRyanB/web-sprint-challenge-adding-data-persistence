// build your `/api/resources` router here
const express = require(`express`);
const Resource = require(`./model`);

const router = express.Router();

router.get(`/`, (req, res) => {
	Resource.getResources()
		.then((resources) => {
			res.status(200).json(resources);
		})
		.catch((err) => res.status(400).json({ message: err.message }));
});

router.post(`/`, (req, res) => {
	Resource.createResource(req.body)
		.then((resource) => {
			res.status(201).json(resource);
		})
		.catch((err) => res.status(400).json({ message: err.message }));
});

module.exports = router;
