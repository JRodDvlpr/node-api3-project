// Express 
const express = require('express');
const router = express.Router();

// ### POST Database ###
const postDB = require('../posts/postDb');

// ### USER Database ###
const userDB = require('./userDb');

// ### MIDDLEWARE ###
const cm = require('../middleware/middleware')
const validateUserId = cm.validateUserId
const validateUser = cm.validateUser
const validatePost = cm.validatePost


// ### POST ADDS USER ###
router.post('/', validateUser, (req, res) => {
  // do your magic!
  const { name } = req.body;

  userDB.insert({ name: name })
  .then(user => {res.status(201).json(user);})
  .catch(err => {res.status(500).json({ error: "Could not add user to database." });
  })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});



module.exports = router;
