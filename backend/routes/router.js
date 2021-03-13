//routes.js
//initialize express router
let router = require('express').Router();
//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API',
        lla: process.env.USERNAME
    });
});
//Export API routes
module.exports = router;