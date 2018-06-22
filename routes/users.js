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
  .then( (data) => {
    console.log('data', data)
    res.send(data)
  })
})

// READ one user
router.get('/:userid', (req, res, next) => {
  // USE KNEX TO GET A SPECIFIC USER
  knex('users')
  .where('id', req.params.userid)
  .then((result) => {
    console.log('the specific user', result)
    res.send(result)
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
  .then( (data) => {
    let insertedRecord = data[0]
    console.log('data', insertedRecord)
    // conclude the route with res.send():
    res.send(insertedRecord) // we created and now are responding back w/ it
  })

  // what if no name was provided in the body data? >> no validation for now
})

// UPDATE ONE record which already exists in db
router.put('/:userid', (req, res, next) => {
  console.log('THE PUT ROUTE');
  // look up a specific user in the database
  knex('users')
  .where('id', req.params.userid)
  .then( (data) => {
    console.log('the specific user', data)

    // once found, if found, update that user record's data
    if(data.length) {
      // user was found, go ahead and update
      knex('users')
      .update({
        name: req.body.name
      })
      .where('id', req.params.userid)
      .returning('*')
      .then((updateResult) => {
        console.log('updateResult', updateResult)

        // respond with the user object, represents a record from the user table
        // conclude the route
        res.send(updateResult[0])
      })
    }
  })
})

// DELETE ONE record for this table
router.delete('/:userid', (req, res, next) => {
  // look up a specific user (id) in the database
  // if it exists, delete it
  knex('users')
  .where('id', req.params.userid)
  .del()
  .then( () => {
    console.log('')
  })
  res.send('DELETED RECORD')
})

module.exports = router;
