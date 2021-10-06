const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.post('/user', usersController.create);

router.get('/health', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;