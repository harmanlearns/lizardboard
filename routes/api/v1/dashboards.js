const Dashboard = require('../../../models/dashboards.js')
const { Widget } = require('../../../models/widgets.js')

const express = require('express')
const router = express.Router()

router.get('/', (request, response, next) => {
  Dashboard.find().exec()
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

router.post('/', (request, response, next) => {
  Dashboard.create( request.body )
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

router.get('/:id', (request, response, next) => {
  Dashboard.findById( request.params.id ).exec()
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

router.put('/:id', (request, response, next) => {
  Dashboard.findByIdAndUpdate( request.params.id, request.body ).exec()
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

router.delete('/:id',(request, response, next) => {
  Dashboard.findByIdAndRemove( request.params.id ).exec()
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

router.post('/:id/widgets', (request, response, next) => {
  const addWidget = widgetData => dashboard => {
    dashboard.widgets.push( new Widget( widgetData ) )
    return dashboard.save()
  }

  Dashboard.findById( request.params.id ).exec()
    .then( addWidget( request.body ))
    .then( dashboard => response.json( dashboard ) )
    .catch( error => next( error ) )
})

module.exports = router
