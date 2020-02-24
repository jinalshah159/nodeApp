const express = require('express');
const router = express.Router();
const {
  getProject,
  createProject,
  getProjectById,
  updateProjectById,
  removeProjectById
} = require('../../db/route/project');
const {
  validate
} = require('../../db/schema/project')
const {
  errorDebugger
} = require('../../utils/debugger')

router.get('/', async (req, res) => {
  let projectList = await getProject()
  res.send(projectList);
});

router.get('/:id', async (req, res) => {
  const project = await getProjectById(req.params.id);
  if (!project) return res.status(404).send('The project with the given ID was not found.');
  res.send(project);
});

router.post('/', async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) {
    let err = error.details.map(e => {
      return {
        msg: e.message,
        key: e.path
      }
    });
    errorDebugger(err)
    return res.status(400).send(err);
  }
  let {
    name,
    technologyStack
  } = req.body;
  let result = await createProject({
    name,
    technologyStack
  })
  if (result.errors) {
    errorDebugger(result.message)
    return res.status(400).send(result.message);
  } else {
    res.send(result);
  }
});

router.put('/:id', async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) {
    let err = error.details[0].message;
    errorDebugger(err)
    return res.status(400).send(err);
  }
  const project = await updateProjectById(req.params.id, req.body.name);
  if (!project) return res.status(404).send('The project with the given ID was not found.');
  res.send(project);
});

router.delete('/:id', async (req, res) => {
  const project = await removeProjectById(req.params.id);
  if (!project) return res.status(404).send('The project with the given ID was not found.');
  res.send(project);
});

module.exports = router;