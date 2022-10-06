require('dotenv').config({silent:true});

const express = require('express');

const app = express();
 
//test snyk
// Setup middleware for parsing application/json
app.use(express.json());
// Setup middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const private = require('./routes/private');
 

const mw = require('./middlewares/auth');
 
//app.use('/private', mw.auth, private);  
app.use('/private', private);
app.listen(process.env.PORT, function(){
  console.log('Listening @ http://localhost:' + process.env.PORT);
});
