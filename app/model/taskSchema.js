const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, " Task Name Required "],
    trim: true,
    maxlength: 25
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', taskSchema)
