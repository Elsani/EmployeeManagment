const express = require('express');
// eslint-disable-next-line no-unused-vars
const path = require('path');
const  bodyParser = require('body-parser');
const cors = require('cors');
const  mongoose = require('mongoose');
const config = require('./DB');
const employees = require ('../routes/employees');
const posts = require('../routes/posts');
const tasks = require('../routes/tasks');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB);


const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use('/employees', employees);
app.use('/tasks',tasks);
app.use('/posts', posts);
var port = process.env.PORT || 4000;

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
app.listen(port, function(){
    // eslint-disable-next-line no-console
    console.log('NodeJS Server Port: ', port);
});
