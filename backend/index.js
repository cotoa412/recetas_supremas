//index.js
//Import Express
let express = require('express')
//import body parser
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');
//Start App
let app = express();
//Assign port
var port = process.env.PORT || 5000;
// Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})
//Import routes
let apiRoutes = require("./routes/router")
//Use API routes in the App
app.use('/api', apiRoutes)

const uri = 'mongodb+srv://' + process.env.USERNAME + ':' + process.env.PASSWORD + '@cluster0.hzxmp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('CONNECTED TO MONGO SUCCESFULLY')
})
.catch(err => console.log(err))
