const express = require('express');
const router = express.Router();
const {
  getUser,
  createUser,
  getUserById,
  updateUserById,
  removeUserById
} = require('../../db/route/user');
const {
  validate
} = require('../../db/schema/user')

router.get('/', async (req, res) => {
  let userList = await getUser()
  res.send(userList);
});

router.get('/:id', async (req, res) => {
  const user = await getUserById(req.params.id);
  if (!user) return res.status(404).send('The user with the given ID was not found.');
  res.send(user);
});

router.post('/', async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let result = await createUser(req.body.name, req.body.project)
  res.send(result);
});

router.put('/:id', async (req, res) => {
 const user = await updateUserById(req.params.id, req.body.name);
  if (!user) return res.status(404).send('The user with the given ID was not found.');
  res.send(user);
});

router.delete('/:id', async (req, res) => {
  const user = await removeUserById(req.params.id);
  if (!user) return res.status(404).send('The user with the given ID was not found.');
  res.send(user);
});

module.exports = router;