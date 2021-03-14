const router = require('express').Router();
//default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to Recetas Supremas',
    });
});

const commentsController = require('../controllers/commentsController');
router.route('/comment')
    .get(commentsController.index)
    .post(commentsController.add);
router.route('/comment/:comment_id')
    .get(commentsController.view)
    .patch(commentsController.update)
    .put(commentsController.update)
    .delete(commentsController.delete);

//Export API routes
module.exports = router;