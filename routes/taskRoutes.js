const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.create);
router.get('/', taskController.list);
router.put('/:id', taskController.edit);
router.delete('/:id', taskController.delete);

module.exports = router;
