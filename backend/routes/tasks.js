const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

//Create a Task
router.post('/', async (req,res) => {
    const { title } = req.body;
    try {
        const newTask = new Task({title});
        const task = await newTask.save();
        res.json(task);
    } catch (err) {

        res.status(500).send('Server Error');

    }
});

//Read all Tasks
router.get('/', async (req,res) => {
    try {

        const tasks = await Task.find();
        res.json(tasks);

    } catch (err) {

        res.status(500).send('Server Error');
    }
});

//Update a Task
router.put('/:id', async (req,res) => {
    const { title, completed } = req.body;
    try {

        let task = await Task.findById(req.params.id);
        if (!task) {
            res.status(404).json({msg : 'Task Not Found'});
        }
        task.title = title || task.title;
        task.completed = completed !== undefined ? completed : task.completed;
        task = await task.save();
        res.json(task);

    } catch (err) {

        res.status(500).send('Server Error');

    }
});


// Delete a Task
router.delete('/:id', async (req,res) => {
    try {

        let task = await Task.findById(req.params.id);
        if (!task) {
            res.status(404).json({msg : 'Task Not Found'});
        }
        await Task.findByIdAndRemove(req.params.id);
        res.json({msg: 'Task Deleted'});

    } catch (err) {

        res.status(500).send('Server Error');

    }
});

module.exports = router;