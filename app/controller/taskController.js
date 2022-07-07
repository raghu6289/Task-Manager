const taskSchema = require('../model/taskSchema')
const asyncWrapper = require('../middleware/asyncWrapper')
const { createCustomeError } = require('../error/custom_error')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await taskSchema.find({})
  return res.status(200).json({ tasks })
})


const createTask = asyncWrapper(async (req, res) => {
  const task = await taskSchema.create(req.body)
  return res.status(201).json({ task })
})


const getTask = asyncWrapper(async (req, res, next) => {
  const id = req.params.id
  const task = await taskSchema.findOne({ _id: id })
  if (!task) {
    return next(createCustomeError(`No Task With id ${id}`, 404))
    //return res.status(404).json({ msg: `No Task With id ${id}` })
  }
  return res.status(200).json({ task })
})


const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params
  const attr = req.body
  const task = await taskSchema.findOneAndUpdate({ _id: id }, attr, {
    new: true, runValidators: true
  })
  if (!task) return next(createCustomeError(`No Task With id ${id}`, 404))
  return res.status(200).json({ task })
})


const deleteTask = asyncWrapper(async (req, res) => {
  const id = req.params.id
  const task = await taskSchema.findOneAndDelete({ _id: id })
  if (!task) return next(createCustomeError(`No Task With id ${id}`, 404))
  return res.status(200).json({ task })
})


module.exports = {
  getAllTasks, createTask, getTask, updateTask, deleteTask
}