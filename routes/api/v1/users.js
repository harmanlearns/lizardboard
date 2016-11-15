const User = require('../../../models/users.js')
// const { DashboardWidget } = require('../../../models/dashboardwidgets.js')

const express = require('express')
const router = express.Router()

// router.get('/', (request, response, next) => {
//   User.find().exec()
//     .then( dashboard => response.json( dashboard ) )
//     .catch( error => next( error ) )
// })

router.post('/', (request, response, next) => {
  User.create( request.body )
    .then( user => response.json( user ) )
    .catch( error => next( error ) )
})

// router.get('/:id', (request, response, next) => {
//   Dashboard.findById( request.params.id ).exec()
//     .then( dashboard => response.json( dashboard ) )
//     .catch( error => next( error ) )
// })
//
// router.put('/:id', (request, response, next) => {
//   Dashboard.findByIdAndUpdate( request.params.id, request.body ).exec()
//     .then( dashboard => response.json( dashboard ) )
//     .catch( error => next( error ) )
// })
//
// router.delete('/:id',(request, response, next) => {
//   Dashboard.findByIdAndRemove( request.params.id ).exec()
//     .then( dashboard => response.json( dashboard ) )
//     .catch( error => next( error ) )
// })

module.exports = router
