const express = require('express');
const app = express();

// Configuration variables
// const config =  require('./config.js')[process.env.NODE_ENV || 'development']
// console.log("database to connectedd...",config.database)



var configJson = require('./config.json')[process.env.NODE_ENV || 'development'];
console.log("configJson to connectedd...",configJson.database)


//var api = require('./routes/api');
//app.use('/api/', api);

app.use(function(error, req, res, next) {
  //console.log("MiddleWare running...")
  res.json({ message: error.message });
}); 

app.listen(5000, () =>
  console.log('Express server is running on localhost:5000')
);