const express = require('express');
const router = express.Router();
const knex = require('../knex'); /* DO NOT FORGET TO REQUIRE KNEX ! */


/* GET users listing. */
// router.post('/:userid/something', (req, res) => {
//   console.log('userid', req.params.userid)
//   res.send('Hi :) here are some users!');
// });

// LIST all users
router.get('/', (req, res, next) => {
  // USE KNEX TO GET ALL USERS
  knex('users')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
})

// READ one user
router.get('/:userid', (req, res, next) => {
  // USE KNEX TO GET A SPECIFIC USER
  knex('users')
  .where('id', req.params.userid)
  .then((data) => {
    console.log('the specific user', data)
    res.send(data)
  })
})

// CREATE(post) ONE record for this table
router.post('/', (req, res, next) => {
  // look for some provided body data
  // req.body
  console.log('req.body', req.body)
  // req.body.name gets me the name

  // create new user in db with knex
  // SQL insert
  knex('users') // nominate
  .insert({name: req.body.name}) // what operation?
  .returning('*')
  /* returning method specifies which column (in this case, all columns) should
  be returned by the insert and update methods */
  .then((data) => {
    let insertedRecord = data[0]
    console.log('data', insertedRecord)
    // conclude the route with res.send():
    res.send(insertedRecord) // we created and now are responding back w/ it
  })

  // what if no name was provided in the body data?
  // no validation for now
})

// UPDATE ONE record for this table
// router.put('/:id', (req, res, next) => {
//   res.send('UPDATED RECORD')
// })

// DELETE ONE record for this table
// router.delete('/:id', (req, res, next) => {
//   res.send('DELETED RECORD')
// })

module.exports = router;
