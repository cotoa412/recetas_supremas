const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling Get for /posts'
    });
});
router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling Post for /posts'
    });
});
router.patch('/:postId',(req, res, next) => {
    res.status(200).json({
        message: 'Handling Update for a post'
    });
});
router.delete('/:postId',(req, res, next) => {
    res.status(200).json({
        message: 'Handling delete for a post'
    });
});

module.exports = router
