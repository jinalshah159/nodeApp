const express = require('express');
const router = express.Router();
const {
  getTechnology,
  createTechnology,
  getTechnologyById,
  updateTechnologyById,
  removeTechnologyById
} = require('../../db/route/technology');
const {
  validate
} = require('../../db/schema/technology')
const {
  errorDebugger
} = require('../../utils/debugger')

router.get('/', async (req, res) => {
  let technologyList = await getTechnology()
  res.send(technologyList);
});

router.get('/:id', async (req, res) => {
  const technology = await getTechnologyById(req.params.id);
  if (!technology) return res.status(404).send('The technology with the given ID was not found.');
  res.send(technology);
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
    learningStack
  } = req.body;
  let result = await createTechnology({
    name,
    learningStack
  })
  if (result.errors) {
    errorDebugger(result.message)
    return res.status(400).send(result.message);
  } else {
    res.send(result);
  }
});


router.put('/:id', async (req, res) => {
  // const {
  //   error
  // } = validate(req.body);
  // if (error) {
  //   let err = error.details[0].message;
  //   errorDebugger(err)
  //   return res.status(400).send(err);
  // }
  const technology = await updateTechnologyById(req.params.id, req.body.name);
  if (!technology) return res.status(404).send('The technology with the given ID was not found.');
  res.send(technology);
});

router.delete('/:id', async (req, res) => {
  const technology = await removeTechnologyById(req.params.id);
  if (!technology) return res.status(404).send('The technology with the given ID was not found.');
  res.send(technology);
});

module.exports = router;