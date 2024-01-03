const Task = require('../models/task');

class TaskController {

    async create(req, res) {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }

    async list(req, res) {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    }

    async edit(req, res) {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'not found'});
        }

        await task.update(req.body);
        res.status(200).json(task);
    }

    async delete(req, res) {
        const task = await Task.findByPk(req.params.id);
        if(!task) {
            return res.status(404).json({ error: 'not found'});
        }

        await task.destroy();
        res.status(200).json({ message: 'deleted' });
    }
}

module.exports = new TaskController();