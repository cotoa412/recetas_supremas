const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require('../config/db.config');
const mongoose = require('mongoose');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Configuring the database
mongoose.Promise = global.Promise;

// Connecting to the database
const uri = ``;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err))

// simple route
app.get("/", (req, res) => {
  res.json({ message: "RECETAS SUPREMAS" });
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});