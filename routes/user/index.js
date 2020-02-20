const express = require('express');
const router = express.Router();
const Joi = require('joi');
const {
  getUser,
  createUser
} = require('../../db/route/user')
const users = [{
    id: 1,
    name: 'Jinal'
  },
  {
    id: 2,
    name: 'Kinjal'
  },
  {
    id: 3,
    name: 'Jigu'
  },
];

router.get('/', async (req, res) => {
  let userList = await getUser()
  res.send(userList);
});

router.post('/', async (req, res) => {
  const {
    error
  } = validateuser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let result = await createUser(req.body.name)
  res.send(result);
});

router.put('/:id', (req, res) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('The user with the given ID was not found.');

  const {
    error
  } = validateuser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  user.name = req.body.name;
  res.send(user);
});

router.delete('/:id', (req, res) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('The user with the given ID was not found.');

  const index = users.indexOf(user);
  users.splice(index, 1);

  res.send(user);
});

router.get('/:id', (req, res) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('The user with the given ID was not found.');
  res.send(user);
});

function validateuser(user) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(user, schema);
}

module.exports = router;