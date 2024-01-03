const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');


router.post('/', tagController.create);
router.get('/', tagController.list);
router.put('/:id', tagController.edit);
router.delete('/:id', tagController.delete);

module.exports = router;