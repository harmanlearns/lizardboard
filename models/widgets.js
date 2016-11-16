const mongoose = require('mongoose')
const { Schema } = mongoose

const WidgetSchema = new Schema ({
  type: String,
  title: String,
  size: { type: Number, required: true },
  contents: String
})

const Widget = mongoose.model( 'Widget', WidgetSchema )

module.exports = { WidgetSchema, Widget }

const dashboard = {
  /* ... */
  widgets: [
    { type: 'Clock', title: 'Clock', size: '1x1', fields: {
      format: { value: '24 hour' },
      location: { value: 'United Kingdom', fields: {
        timezone: { value: 'London' }
      }}
    },
    { type: 'Facebook', title: 'Likes Today', size: '2x3', oauthToken: 'uh2498tyhjghfdjkb' }
  ]
}

const clockWidgetSchema = {
  type: 'Clock',
  title: {
    type: 'text',
    value: 'Clock'
  },
  size: {
    type: 'dropdown',
    value: '1x1',
    options: [ '1x1', '2x1', '2x2' ]
  },
  fields: {
    format: {
      type: 'radio',
      value: '24 hour',
      options: [ '24 hour', '12 hour' ]
    },
    location: {
      type: 'dropdown',
      value: 'United Kingdom',
      options: [ '...' ]
      fields: {
        timezone: {
          type: 'dropdown',
          value: 'London',
          options: [ '...' ]
        }
      }
    }
  }
}

const textWidgetSchema = {
  type: 'Text',
  title: {
    type: 'text',
    value: 'Text'
  },
  size: {
    type: 'dropdown',
    value: '1x1',
    options: [ '1x1', '2x1', '2x2' ]
  },
  fields: {

  }
}


//first, define all individual widget types and what data they have. Start with simple and well known ones.
//then, put those individual widgets into the widget collection.
//at some point, write logic that allows a user to insert a specific widget type into their dashboard
//we probably do not need the WidgetSchema any more, since we are not defining what a widget looks like, so we can have flexibility
//how do we sync our widgets that we write in atom and send them to the database?
//should we define each individual widget in a new file?
