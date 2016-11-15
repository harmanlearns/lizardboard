const mongoose = require('mongoose')
const { Schema } = mongoose

const DashboardWidgetSchema = new Schema ({
  type: String,
  title: String,
  size: String,
  contents: String
})

const Widget = mongoose.model( 'Widget', DashboardWidgetSchema )

module.exports = { DashboardWidgetSchema, Widget }
