const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling Get for /comments'
    });
});
router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling Post for /comments'
    });
});
router.patch('/:postId',(req, res, next) => {
    res.status(200).json({
        message: 'Handling Update for a comment'
    });
});
router.delete('/:commentId',(req, res, next) => {
    res.status(200).json({
        message: 'Handling delete for a comment'
    });
});

module.exports = router
