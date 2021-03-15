const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./api/routes/users');
const postRoutes = require('./api/routes/posts');
const commentRoutes = require('./api/routes/comments');

//Log for requests
app.use(morgan('dev'));

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

//DB
const uri = 'mongodb+srv://' + process.env.USERNAME + ':' + process.env.PASSWORD + '@cluster0.hzxmp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('CONNECTED TO MONGO SUCCESFULLY')
})
.catch(err => console.log(err))

//App Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

//Handling Errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
