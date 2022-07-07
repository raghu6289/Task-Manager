const exoress = require('express')
const router = exoress.Router()

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controller/taskController')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router


/*
app.get('/api/v1/tasks)        - get all task
app.post('/api/v1/tasks)       = create task
app.get('/api/v1/tasks/:id)    = get single task 
app.patch('/api/v1/tasks/:id)  - update task
app.delete('/api/v1/tasks/:id) - delete task

*/