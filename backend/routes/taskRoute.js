const express = require('express');
const router = express.Router();
const {addTask, getTask, getTaskById,updateTask,deleteTask} = require('../controllers/taskController');

router.post('/addTask', addTask);
router.get('/getTask', getTask);
router.get('/getTaskById/:id', getTaskById);
router.put('/updateTask/:id', updateTask);
router.delete('/deleteTask/:id', deleteTask);

module.exports = router;
