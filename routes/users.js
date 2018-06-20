const express = require('express');
const router = express.Router();
// << DO NOT FORGET TO REQUIRE KNEX ! ! ! >>
const knex = require('../knex');


/* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('Hi :) here are some users!');
// });

// route that gets me ALL users:
router.get('/', (req, res, next) => {
  // use knex to get all users
  knex('users')
    .then((data) => {
      console.log('data', data)
      res.send(data)
    })
    .catch((err) => {
      next('SOMETHING WENT WRONG')
    })
})

router.get('/:userid', (req, res, next) => {
  // use knex to get single users
  knex('users')
    .where('id', req.params.userid)
    .then((data) => {
      console.log('the single user', data)
      res.send(data)
    });
});


/*
// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  res.send('CREATED RECORD')
})
// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
  res.send('UPDATED RECORD')
})
// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  res.send('DELETED RECORD')
})
*/

module.exports = router;
