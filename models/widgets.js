const mongoose = require('mongoose')
const { Schema } = mongoose

const WidgetSchema = new Schema ({
  type: String,
  title: String,
  size: { type: Number, required: true },
  contents: String
})

module.exports = { WidgetSchema, Widget }
