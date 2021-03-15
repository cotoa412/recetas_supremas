const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling Get for /users'
    });
});
router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling Post for /users'
    });
});
router.patch('/:userId',(req, res, next) => {
    res.status(200).json({
        message: 'Handling Update for a user'
    });
});
router.delete('/:userId',(req, res, next) => {
    res.status(200).json({
        message: 'Handling delete for a user'
    });
});

module.exports = router
